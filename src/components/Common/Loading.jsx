import React from 'react'

const Loading = () => {
  return (
<div className='flex space-x-2 justify-center items-center bg-white dark:bg-dark-bg h-screen'>
 	<span className='sr-only'>Loading...</span>
  	<div className='h-4 w-4 bg-dark-bg dark:bg-bg rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-4 w-4 bg-dark-bg dark:bg-bg rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-4 w-4 bg-dark-bg dark:bg-bg rounded-full animate-bounce'></div>
</div>
  )
}

export default Loading
