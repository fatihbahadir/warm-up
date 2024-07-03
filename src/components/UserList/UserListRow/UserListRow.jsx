import React, { memo } from 'react'
import { useNavigate } from "@reach/router"

const UserListRow = ({ id, name, username, email, phone, website }) => {
  const randomClass = `${Math.random() > 0.5  ? 'bg-secondary border-dark-secondary text-dark-secondary dark:bg-dark-secondary dark:border-secondary dark:text-secondary' : 'bg-accent border-dark-accent text-dark-accent dark:bg-dark-accent dark:border-accent dark:text-accent'}`
  const navigate = useNavigate();
  return (
    <tr onClick={()=> navigate(`/user/${id}/posts`)} className="hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer">
    <td className="px-6 py-2">
        <div className='flex items-center gap-2'>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border ${randomClass} font-bold text-xs`}>
                {name.split(" ")[0][0] + name.split(" ")[1][0]}
            </div>
            <p>{name}</p>
        </div>
    </td>
    <td className="px-6 py-2">{username} </td>
    <td className="px-6 py-2"> {email}</td>
    <td className="px-6 py-2">{phone} </td>
    <td className="px-6 py-2"> {website}</td>
  </tr>
  )
}

export default memo(UserListRow);
// re-renderları engelledi mi ?
