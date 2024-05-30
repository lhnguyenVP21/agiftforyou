import React from "react";
import icon from "../images/Meow-icon.png";
import { useState } from "react";
import DropdownAbout from "../components/DropdownAbout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const OurPlansHeader = () => {
  const [showDropdownAbout, setShowDropdownAbout] = useState(false);
  const toggleDropdownAbout = () => {
    setShowDropdownAbout(!showDropdownAbout);
  };
  const closeDropdownAbout = () => {
    setShowDropdownAbout(false);
  };
  return (
    <div className="flex flex-row justify-evenly items-center gap-20 text-xl font-bold absolute right-60 top-5 z-[1]">
      <div className="flex flex-row">
        <div>
          <img
            src={icon}
            alt="Facebook"
            className=" w-12 h-12 cursor-pointer "
          />
        </div>
        <p className=" pr-40 pt-1 flex items-center text-xl text-white font-extrabold pl-2">
          OURFUTUREPLANS
        </p>
      </div>

      <button className="text-white hover:underline">
        <Link to="/">Home</Link>
      </button>

      <button className="text-white hover:underline">
        <Link to="/purchase-food">Food Store</Link>
      </button>

      <div onMouseLeave={closeDropdownAbout}>
        <button
          className="text-white hover:underline"
          onClick={toggleDropdownAbout}
        >
          About
          <FontAwesomeIcon icon={faChevronDown} className="text-white" />
        </button>

        {showDropdownAbout && <DropdownAbout onMouse={closeDropdownAbout} />}
      </div>
    </div>
  );
};

export default OurPlansHeader;
