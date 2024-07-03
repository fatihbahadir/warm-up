import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from './PostCard/PostCard';
import Loading from '../Common/Loading';

const PostList = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(()=> {
    posts.length < 1 && dispatch({ type: 'FETCH_POSTS_REQUEST' })
  }, [])

  if (loading) return <div><Loading/></div>;


  return (
    <div className='flex flex-col items-center justify-center'>
      {
        posts.map((post)=> (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            author={post.author}

          />
        ))
      }
    </div>
  )
}

export default PostList
