import React from "react";
import { useState } from "react";
import DropdownAbout from "../components/DropdownAbout";
import DropdownPurchase from "./DropdownPurchase";
import { Link } from "react-router-dom";
import icon from "../images/Meow-icon.png";
const Headers = () => {
  const [showDropdownPurchase, setShowDropdownPurchase] = useState(false);
  const toggleDropdownPurchase = () => {
    setShowDropdownPurchase(!showDropdownPurchase);
  };
  const closeDropdownPurchase = () => {
    setShowDropdownPurchase(false);
  };

  const [showDropdownAbout, setShowDropdownAbout] = useState(false);
  const toggleDropdownAbout = () => {
    setShowDropdownAbout(!showDropdownAbout);
  };
  const closeDropdownAbout = () => {
    setShowDropdownAbout(false);
  };
  return (
    <div className="flex flex-row justify-evenly items-center gap-20 text-xl font-bold pt-3 pb-3 bg-senerity">
      <Link to="/">
        <div className="flex flex-row">
          <div>
            <img
              src={icon}
              alt="Facebook"
              className=" w-12 h-12 cursor-pointer "
            />
          </div>
          <p className=" ml-2 flex items-center text-xl text-red-500 font-extrabold">
            A Gift for Meow
          </p>
        </div>
      </Link>
      <button className="hover:bg-blue-50 hover:border-gray-200 hover:text-blue-500 cursor-pointer rounded-xl w-36 h-10 text-center text-blue-800">
        <Link to="/lucky-spin">LUCKY SPIN</Link>
      </button>
      <div onMouseLeave={closeDropdownPurchase}>
        <button
          className="hover:bg-blue-50 hover:border-gray-200 hover:text-blue-500 cursor-pointer rounded-xl w-48 h-10 text-center text-blue-800"
          onMouseEnter={toggleDropdownPurchase}
        >
          PURCHASE
        </button>
        {showDropdownPurchase && (
          <DropdownPurchase onMouse={closeDropdownPurchase} />
        )}
      </div>
      <div onMouseLeave={closeDropdownAbout}>
        <button
          className="hover:bg-blue-50 hover:border-gray-200 hover:text-blue-500 cursor-pointer rounded-xl w-32 h-10 text-center text-blue-800"
          onMouseEnter={toggleDropdownAbout}
        >
          ABOUT
        </button>
        {showDropdownAbout && <DropdownAbout onMouse={closeDropdownAbout} />}
      </div>
    </div>
  );
};

export default Headers;
