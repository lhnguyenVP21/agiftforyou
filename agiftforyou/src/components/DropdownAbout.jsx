import React from "react";
import { Link } from "react-router-dom";

const DropdownAbout = ({ onClose }) => {
  const handleItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
  };
  return (
    <div className="absolute top-[55px] w-32 bg-white border border-gray-300 pt-2 rounded-2xl">
      <ul className="flex flex-col gap-4 px-3">
        <li
          className="hover:bg-gray-300 rounded-xl h-10 flex flex-col justify-center items-center"
          onClick={() => handleItemClick("About me")}
        >
          <Link to="/about-her">About her</Link>
        </li>
        <li
          className="hover:bg-gray-300 rounded-xl h-10 flex flex-col justify-center pl-1"
          onClick={() => handleItemClick("About me")}
        >
          <Link to="/about-her">About us</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownAbout;
