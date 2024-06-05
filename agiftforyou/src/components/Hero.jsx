import React from "react";
import bgVid from "../images/bgvid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <video
        className="w-full h-full object-cover "
        src={bgVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white p-4 gap-4">
        <div className="text-6xl flex flex-row gap-2 font-bold">
          <h1 className="">LET US TRAVEL</h1>
          <h1 className="text-blue-300">TOGETHER</h1>
        </div>
        <div className="text-5xl flex flex-row gap-2 font-bold">
          <h2 className="text-blue-300">ADVENTURE</h2>
          <h2>AWAITS US</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
