import React from "react";
import "../index.css";
import Headers from "../components/Headers";
import Footer from "../components/HomeFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import maldives from "../images/maldives.png";

const Home = () => {
  const handleArrowClick = () => {
    const targetElement = document.getElementById("target-container");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        <div className="absolute top-[45%] left-[380px] transform -translate-x-1/2 -translate-y-1/2 text-white text-center pt-40">
          <p className="font-bold text-7xl">Welcome to</p>
          <br></br>
          <p className="font-bold text-7xl">A Gift For Meow</p>
          <div className="translate-y-[120px] translate-x-[250px] text-blue-700 text-4xl font-bold ">
            Find out more
            <div onClick={handleArrowClick}>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-blue-700 animate-bounce cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="target-container" className="mt-96">
        Hello test 1
        <Footer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
