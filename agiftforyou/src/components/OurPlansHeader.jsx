import React from "react";
import icon from "../images/Meow-icon.png";
import { Link } from "react-router-dom";


const OurPlansHeader = () => {

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
        <p className=" pr-40 pt-1 flex items-center text-xl text-blue-300 font-extrabold pl-2">
          OURFUTUREPLANS
        </p>
      </div>

      <button className="text-white hover:underline">
        <Link to="/">Home</Link>
      </button>

      <button className="text-white hover:underline">
        <Link to="/purchase-food">Food Store</Link>
      </button>

      <div>
        <button
          className="text-white hover:underline"
        >
          <Link to="/about-her">About Us</Link>
        </button>

      </div>
    </div>
  );
};

export default OurPlansHeader;
