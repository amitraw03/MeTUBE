import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex bg-black">
      <div className={`transition-all duration-300 ${isMenuOpen ? 'w-1/6' : 'w-0 overflow-hidden'}`}>
        <Sidebar />
      </div>
      <div className={`transition-all duration-300 ${isMenuOpen ? 'w-5/6' : 'w-full'}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;