import React from "react";
import "../index.css";
import Headers from "../components/Headers";
import Footer from "../components/HomeFooter";
import maldives from "../images/maldives.png";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <div>
            <Headers />
          </div>
          <img
            src={maldives}
            className="w-full h-auto"
            alt="beach background"
          />
        </div>
        <div className="absolute top-1/2 left-[380px] transform -translate-x-1/2 -translate-y-1/2 text-white text-center pt-40">
          <p className="font-bold text-7xl">Welcome to</p>
          <br></br>
          <p className="font-bold text-7xl">A Gift For Meow</p>
          <div className="translate-y-[50px]">
            <button className=" bg-blue-400 w-72 h-14 rounded-xl text-3xl font-bold hover:bg-blue-300 hover:text-black">
              Find out more
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
