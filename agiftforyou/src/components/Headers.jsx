import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/Meow-icon.png";
const Headers = () => {
  return (
    <div className="flex flex-row justify-evenly items-center gap-20 text-xl font-bold absolute right-48 top-5 z-[2]">
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
      <div>
        <button
          className=" hover:underline w-32 h-10 text-center text-white "
        >
          <Link to="/about-her">About Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Headers;
