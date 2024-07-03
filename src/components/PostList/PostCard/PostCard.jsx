import React from 'react'

const PostCard = ({ title, body, author }) => {
  const randomClass = `${Math.random() > 0.5  ? 'bg-secondary border-dark-secondary text-dark-secondary dark:bg-dark-secondary dark:border-secondary dark:text-secondary' : 'bg-accent border-dark-accent text-dark-accent dark:bg-dark-accent dark:border-accent dark:text-accent'}`
  return (
    <div className='border border-gray-200 dark:border-gray-700 border-t-0 w-[500px] 2xl:w-[700px] py-5 px-5  flex items-start text-sm'>
        <div className='flex justify-center items-start  gap-2'>
            <div className={`!w-12 !h-12 flex-[11%] 2xl:flex-[6%] flex items-center justify-center rounded-full border ${randomClass} font-bold text-xs`}>
                {author.name.split(" ")[0][0] + author.name.split(" ")[1][0]}
            </div>
            <div className='flex flex-col justify-center text-sm flex-[91%]'>
            <p className='font-semibold'>{author.name} <span className='text-gray-500'>·</span> <span className='text-gray-500'>{author.username}</span></p>
            <p>{title}</p>
            <br />
            <div>
                {body}
            </div>
            </div>
       
        </div>
        
    </div>
  )
}

export default PostCard
