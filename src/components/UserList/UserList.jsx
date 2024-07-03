import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import UserListRow from "./UserListRow/UserListRow";
import Loading from "../Common/Loading";

const UserList = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    if (users.length < 1) {
      dispatch({ type: "FETCH_USERS_REQUEST" });
    }
  }, [users.length]);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div><Loading/></div>;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-text dark:text-text-dark">
        <thead className="text-xs text-gray-500 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Website
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {filteredUsers.map((user) => (
            <UserListRow
                id={user.id}
                key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
