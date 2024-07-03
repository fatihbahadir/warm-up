import React, { useEffect, useState } from 'react';
import Tab from '../components/Tab/Tab';
import UserList from '../components/UserList/UserList';
import useDebounce from '../hooks/useDebounce';
import PostList from '../components/PostList/PostList';
import { toast } from 'react-toastify';

const Home = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  
  return (
    <div>
      <Tab searchTerm={searchTerm} setSearchTerm={setSearchTerm} activeTab={activeTab} setActiveTab={setActiveTab}/>
      {
        activeTab === "users" ? <UserList searchTerm={debouncedSearchTerm} /> :
        activeTab === "posts" ? <PostList /> :
        "An error occured !"
      }
    </div>
  );
}

export default Home;