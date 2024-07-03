import React, { useState } from "react";
import { TAB_OPTIONS } from "../../consts/tab-options";
import TabElement from "./TabElement/TabElement";
import { IoIosSearch } from "react-icons/io";

const Tab = ({ activeTab, setActiveTab, searchTerm ,setSearchTerm }) => {
  return (
    <div className="text-sm font-medium text-center text-text border-b border-gray-200 dark:text-text-dark dark:border-gray-700">
      <ul className="flex flex-wrap items-center -mb-px">
        {TAB_OPTIONS.map((tab) => (
          <TabElement
            key={tab.href}
            tab={tab.name}
            href={tab.href}
            setActiveTab={setActiveTab}
            isActive={activeTab === tab.href}
          />
        ))}

        {
          activeTab === 'users' &&
          <li className="ml-auto relative border-b border-gray-200 dark:border-gray-700 flex items-center text-text dark:text-text-dark">
          <input
            className="py-1 px-2 focus:border-none outline-none bg-transparent "
            type="text"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            name=""
            id=""
            placeholder="Filter"
          />
          <IoIosSearch className="w-[1.5em] h-[1.5em]"/>
        </li>
        }
 
      </ul>
    </div>
  );
};

export default Tab;
