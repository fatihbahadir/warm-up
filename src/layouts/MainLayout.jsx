import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { Link } from '@reach/router';

const MainLayout = ({ children }) => {
 
  return (
    <div className='min-h-screen w-full bg-bg dark:bg-dark-bg text-text dark:text-text-dark px-12 '>
        <nav className='w-full flex items-center justify-between py-5 sticky top-0 bg-bg z-[5] dark:bg-dark-bg'>
            <Link to='/' className='text-xl tracking-wider font-semibold'>WARM-UP TASK</Link>
            <ThemeSwitcher/>
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainLayout
