import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white h-screen w-1/6 p-4">
      <p className="text-xl font-bold mb-4">Sidebar Text</p>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="flex items-center text-white">
              <FaHome className="mr-2" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="flex items-center text-white">
              <FaUser className="mr-2" />
              <span>Profile</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="flex items-center text-white">
              <FaCog className="mr-2" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center text-white">
              <FaSignOutAlt className="mr-2" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
