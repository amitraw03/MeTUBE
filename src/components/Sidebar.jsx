import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="bg-black h-screen overflow-y-auto">
      <ul className="text-gray-300 my-4 ml-5 font-bold space-y-1">
        <Link to='/'><li>🏠︎ Home</li></Link>
        <li>🔥 Shorts</li>
        <li>🔔 Subscriptions</li>
      </ul>
      <hr className="w-5/6 opacity-35" />
      <h1 className="text-gray-300 font-bold ml-4 mt-2">YOU </h1>
      <ul className="text-gray-300 font-semibold my-4 ml-5 space-y-1">
        <li>Library</li>
        <li>History</li>
        <li> Watch later</li>
      </ul>
      <hr className="w-5/6 opacity-35" />
      <h1 className="text-gray-300 font-bold ml-4 mt-2">Explore</h1>
      <ul className="text-gray-300 font-semibold my-4 ml-5 space-y-1">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Live</li>
        <li>News</li>
      </ul>
      <hr className="w-5/6 opacity-35" />
      <ul className="text-gray-300 my-4 ml-5 font-bold">
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;