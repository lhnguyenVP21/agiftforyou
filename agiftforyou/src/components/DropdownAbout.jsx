import React from "react";
import { Link } from "react-router-dom";

const DropdownAbout = ({ onClose }) => {
    const handleItemClick = (item) => {
      console.log(`Clicked on: ${item}`);
    };
    return (
        <div className="absolute top-[80px] w-36 bg-white border border-gray-300 pt-2 px-1 rounded-2xl">
            <ul className="flex flex-col gap-4 text-xl">
                <li className="hover:bg-gray-300 rounded-xl h-10 pl-4 flex flex-col justify-center" onClick={() => handleItemClick("About me")}>
                <Link to="/about-me">
                    About me
                </Link>
                </li>
                <li className="hover:bg-gray-300 rounded-xl h-10 pl-4 flex flex-col justify-center" onClick={() => handleItemClick("About me")}>
                <Link to="/about-her">
                    About her
                </Link>
                </li>
                <li className="hover:bg-gray-300 rounded-xl h-10 pl-4 flex flex-col justify-center" onClick={() => handleItemClick("About me")}>
                <Link to="/about-her">
                    About us
                </Link>
                </li>
            </ul>
        </div>
           
    );
};
        
export default DropdownAbout;