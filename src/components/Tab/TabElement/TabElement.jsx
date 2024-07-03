import React from 'react'

const TabElement = ({ isActive, tab, href, setActiveTab }) => {
  const active = `text-primary border-primary dark:hover:text-dark-primary`
  return (
    <li className="me-2">
          <a
            href="#"
            onClick={()=>setActiveTab(href)}
            className={`inline-block p-4 border-b-2 rounded-t-lg ${isActive ? active : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}` }
          >
            {tab}
          </a>
        </li>
  )
}

export default TabElement
