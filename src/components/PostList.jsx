import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PostList = ({ userId }) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.posts);

  useEffect(() => {
    if (userId) {
      dispatch({ type: 'FETCH_POSTS_REQUEST', payload: userId });
    }
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {posts.map(post => (
        <div key={post.id} className="p-2 border-b">{post.title}</div>
      ))}
    </div>
  );
};

export default PostList;