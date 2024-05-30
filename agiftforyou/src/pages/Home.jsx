import React from "react";
import "../index.css";
import Headers from "../components/Headers";
import Footer from "../components/HomeFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCat, faHeart } from "@fortawesome/free-solid-svg-icons";
import maldives from "../images/maldives.jpg";

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
            className="w-full h-[1400px]"
            alt="beach background"
          />
        </div>
        <div className="absolute top-[12%] left-[650px] transform -translate-x-1/2 -translate-y-1/2 text-white text-center pt-40 mr-40">
          <p className="font-extrabold text-6xl font-noto-serif">
            GIFT FOR MEOW MEOW
            <FontAwesomeIcon
            icon={faHeart}
            className=" pl-1 text-red-400 pt-6"
          />
            <FontAwesomeIcon
            icon={faCat}
            className=" pl-1 text-white pt-6"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className=" pl-1 text-red-400 pt-6"
          />
          </p>
          
          <div className="translate-y-[80px]  text-white text-4xl font-bold ">
            Find out more
            <div onClick={handleArrowClick}>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white animate-bounce cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="target-container"
        className="parallelogram bg-rose-200 rounded-3xl"
      >
        Hello test 1
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
