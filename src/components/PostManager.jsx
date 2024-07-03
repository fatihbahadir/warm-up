import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostManager = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [postId, setPostId] = useState(null);
  const dispatch = useDispatch();

  const addPost = () => {
    const newPost = { userId, title };
    dispatch({ type: 'ADD_POST_REQUEST', payload: newPost });
    setTitle('');
  };

  const updatePost = () => {
    const updatedPost = { id: postId, userId, title };
    dispatch({ type: 'UPDATE_POST_REQUEST', payload: updatedPost });
    setTitle('');
    setPostId(null);
  };

  const deletePost = (id) => {
    dispatch({ type: 'DELETE_POST_REQUEST', payload: id });
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />
      <button onClick={addPost} className="bg-blue-500 text-white p-2 ml-2">
        Add Post
      </button>
      <button onClick={updatePost} className="bg-yellow-500 text-white p-2 ml-2">
        Update Post
      </button>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Post ID to delete/update"
          value={postId || ''}
          onChange={(e) => setPostId(e.target.value)}
          className="border p-2"
        />
        <button onClick={() => deletePost(postId)} className="bg-red-500 text-white p-2 ml-2">
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostManager;