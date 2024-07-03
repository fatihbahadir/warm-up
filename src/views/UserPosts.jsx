import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaPlus, FaArrowLeft, FaPen } from "react-icons/fa";
import { Link } from "@reach/router";
import Modal from "../components/Common/Modal";
import { PiXBold } from "react-icons/pi";
import Loading from "../components/Common/Loading";
import AddPostModal from "../components/PostList/AddPostModal/AddPostModal";
import UpdatePostModal from "../components/PostList/UpdatePostModal/UpdatePostModal";

const UserPosts = (props) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.userPosts);
  const { users } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [activeElement, setActiveElement] = useState();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const findUser = () => {
    return users.find((user) => user.id === Number(props.userId));
  };

  const user = findUser();

  useEffect(() => {
    dispatch({ type: "FETCH_USER_POSTS_REQUEST", payload: props.userId });
  }, []);

  useEffect(() => {
    users.length < 1 && dispatch({ type: "FETCH_USERS_REQUEST" });
  }, []);

  const deletePost = (id) => {
    dispatch({ type: "DELETE_USER_POST_REQUEST", payload: id });
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div>
      <div className="w-full flex justify-between items-center text-sm mb-5">
        <Link to="/">
          <FaArrowLeft className="transition-all hover:scale-110 " />
        </Link>
        <button
          onClick={() => {
            setModalType("add");
            handleOpenModal();
          }}
          className="border border-gray-200 hover:bg-gray-200  transition-all dark:hover-bg-gray-700 dark:hover:text-text dark:border-gray-700 rounded px-2 py-1 flex items-center justify-center gap-2"
        >
          <FaPlus />
          Add New Post
        </button>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card transition-all relative col-span-12 md:col-span-6 lg:col-span-4 border border-gray-200 dark:border-gray-700 rounded py-4 pl-4 pr-8 text-sm"
          >
            <div className="flex justify-center items-start  gap-2">
              <div
                className={`w-8 h-8 flex-[15%] sm:w-10 sm:h-10 lg:w-12 lg:h-12 lg:flex-[17%] xl:flex-[13%] 2xl:flex-[6%] flex items-center justify-center rounded-full border bg-secondary border-dark-secondary text-dark-secondary dark:bg-dark-secondary dark:border-secondary dark:text-secondary font-bold text-xs`}
              >
                {user?.name.split(" ")[0][0] + user?.name.split(" ")[1][0]}
              </div>
              <div className="flex flex-col justify-center text-sm flex-[87%]">
                <p className="font-semibold">
                  {user?.name} <span className="text-gray-500">·</span>{" "}
                  <span className="text-gray-500">{user?.username}</span>
                </p>
                <p>{post.title}</p>
                <br />
                <div>{post.body}</div>
              </div>
            </div>
            <div className="absolute top-3 right-2 flex gap-2">
              <FaPen
                onClick={() => {
                  setModalType("edit");
                  handleOpenModal();
                  setActiveElement(post)
                }}
                className="w-[1.3em] h-[1.3em] text-gray-400 dark:text-gray-700 dark:hover:text-dark-accent hover:text-accent transition-all cursor-pointer"
              />
              <FaTrash
                onClick={() => deletePost(post.id)}
                className="w-[1.3em] h-[1.3em] text-gray-400 dark:text-gray-700 dark:hover:text-red-800 hover:text-red-500 transition-all cursor-pointer
              "
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal>
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Add Post</h2>
            <PiXBold
              className="cursor-pointer hover:scale-110 w-[1.3em] h-[1.3em] transition-all"
              onClick={handleCloseModal}
            />
          </div>
          {modalType === "add" ? (
            <AddPostModal closeModal={handleCloseModal} userId={props.userId} />
          ) : modalType === "edit" ? (
            <UpdatePostModal closeModal={handleCloseModal} activeElement={activeElement} userId={props.userId} />
          ) : (
            ""
          )}
        </Modal>
      )}
    </div>
  );
};

export default UserPosts;
