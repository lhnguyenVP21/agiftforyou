import React from "react";
import icon from "../images/Meow-icon.png";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <div className="flex flex-row justify-evenly items-center text-xl py-4 font-bold bg-rose-quartz mb-16">
      <div className="flex flex-row">
        <div>
          <img
            src={icon}
            alt="Facebook"
            className=" w-12 h-12 cursor-pointer "
          />
        </div>
        <p className=" pr-40 pt-1 flex items-center text-xl text-red-500 font-extrabold">
          MeowMeowFood
        </p>
      </div>

      <button className="text-red-400 hover:text-red-500">Home</button>

      <button className="text-red-400 hover:text-red-500">Purchase items</button>

      <button className="text-red-400 hover:text-red-500">About</button>
    </div>
  );
};

export default Headers;
