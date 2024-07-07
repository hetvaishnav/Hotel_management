import React from 'react';
import { Link } from 'react-router-dom'; // Import for routing

// Replace with your desired icon library (e.g., FontAwesome, React Icons)
import { FaArrowRight } from 'react-icons/fa';

const Card = ({ title, text, bgColor = 'bg-white', icon, link }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden ${bgColor} w-64 h-64 flex flex-col justify-between p-6`}
    >
      {icon && (
        <span className="text-3xl inline-block mb-4 text-blue-500">
          {icon}
        </span>
      )}
      <div className="flex-grow">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-700 mb-4">{text}</p>
      </div>
      {link && (
        <Link
          to={link}
          className={`text-center py-2 px-4 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          Go <FaArrowRight className="inline-block ml-2" />
        </Link>
      )}
    </div>
  );
};

export default Card;
