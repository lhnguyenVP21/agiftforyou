import React from "react";
import { useState } from "react";
import DropdownAbout from "../components/DropdownAbout";
import { Link } from "react-router-dom";
import icon from "../images/Meow-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Headers = () => {
  const [showDropdownAbout, setShowDropdownAbout] = useState(false);
  const toggleDropdownAbout = () => {
    setShowDropdownAbout(!showDropdownAbout);
  };
  const closeDropdownAbout = () => {
    setShowDropdownAbout(false);
  };
  return (
    <div className="flex flex-row justify-evenly items-center gap-20 text-xl font-bold absolute right-48 top-10 z-[2]">
      <Link to="/">
        <div className="flex flex-row">
          <div>
            <img
              src={icon}
              alt="Facebook"
              className=" w-12 h-12 cursor-pointer "
            />
          </div>
          <p className=" ml-2 flex items-center text-xl text-white font-extrabold">
            A Gift for Meow
          </p>
        </div>
      </Link>
      <button className="hover:text-white hover:underline rounded-xl w-36 h-10 text-center text-white">
        <Link to="/purchase-food">FOOD STORE</Link>
      </button>
      <button className="hover:text-white hover:underline rounded-xl w-36 h-10 text-center text-white">
        <Link to="/our-plans">OUR PLANS</Link>
      </button>
      <div onMouseLeave={closeDropdownAbout}>
        <button
          className=" hover:underline w-32 h-10 text-center text-white "
          onClick={toggleDropdownAbout}
        >
          ABOUT
          <FontAwesomeIcon icon={faChevronDown} className="pl-2 text-white" />
        </button>

        {showDropdownAbout && <DropdownAbout onMouse={closeDropdownAbout} />}
      </div>
    </div>
  );
};

export default Headers;
