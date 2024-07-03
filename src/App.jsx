import React, { useEffect, useState } from 'react';
import { Router, Link } from "@reach/router";
import Home from './views/Home';
import UserPosts from './views/UserPosts';
import MainLayout from './layouts/MainLayout';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <Router>
        <MainLayout path="/">
          <Home path="/" />
          <UserPosts path="/user/:userId/posts" />
        </MainLayout>
      </Router>
      <ToastContainer 
      theme={localStorage.getItem("darkMode") === "true" ? 'dark' : 'light'}
      />
    </>
  );
};

export default App;