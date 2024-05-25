import React from "react";
import icon from "../images/Meow-icon.png";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <div className="flex flex-row justify-evenly text-xl py-4 font-bold bg-rose-quartz mb-16">
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
    </div>
  );
};

export default Headers;
