import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const UpdatePostModal = ({ activeElement, userId, closeModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: activeElement.title,
    body: activeElement.body
  });

  const handleSubmit = () => {
    if (formData.title.trim().length < 2) {
        toast.error('Title should be at least 2 characters')
        return
    }
    else if (formData.body.trim().length < 5) {
        toast.error('Text should be at least 5 characters')
        return
    }
    dispatch({ type: 'UPDATE_USER_POST_REQUEST', payload: {...formData, userId, postId: activeElement.id} });
    closeModal();
  }

  return (
<div className='flex flex-col gap-3'>
    <div className='flex flex-col gap-1 text-sm'>
        <label>Title</label>
        <input value={formData.title} onChange={(e)=>{
            setFormData({
                ...formData,
                title: e.target.value,
            })
        }} type="text" className='border rounded w-full py-2 px-2 outline-none border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500 transition-all bg-transparent' />
    </div>
    <div className='flex flex-col gap-1 text-sm'>
        <label>Text</label>
        <textarea 
        value={formData.body} onChange={(e)=>{
            setFormData({
                ...formData,
                body: e.target.value,
            })
        }} type="text"
        className='h-32 resize-none border rounded w-full py-1 px-2 border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500 transition-all outline-none bg-transparent' />
    </div>
    <div className='w-full text-right'>
        <button onClick={handleSubmit} className='text-sm border border-gray-300 hover:bg-gray-300 transition-all dark:border-gray-700 dark:hover:bg-gray-700 rounded px-3 py-2 mt-5'>Submit Post</button>
    </div>
    </div>
  )
}

export default UpdatePostModal
