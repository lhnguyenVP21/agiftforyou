import React from "react";
import "../index.css";
import Headers from "../components/Headers";
import Footer from "../components/HomeFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCat,
  faHeart,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import maldives from "../images/maldives.jpg";
import foodstore from "../images/foodstore.jpg";
import { Link } from "react-router-dom";

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
            <FontAwesomeIcon icon={faCat} className=" pl-1 text-white pt-6" />
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
        className="text-center font-noto-serif text-3xl py-10 px-20 bg-pink-50"
      >
        This is a website I made just for you and I really love to make another
        one. Let's find out what this website can do!
        <FontAwesomeIcon
          icon={faSmile}
          className=" pl-1 text-yellow-400 pt-6"
        />
        <FontAwesomeIcon icon={faHeart} className=" pl-1 text-red-400 pt-6" />
      </div>
      {/*Food */}

      <div className="bg-pink-100 w-[1260px] h-full py-10 drop-shadow-md px-7 flex flex-col gap-10">
        <div className="text-center text-4xl text-red-400 font-noto-serif">
          MeowMeowFood
        </div>
        <div className="flex flex-row gap-28">
          <div className="text-center flex flex-col items-center gap-4">
            <div className="text-[30px] font-semibold pt-16 text-gray-600 ">
              Order food here and have it delivered to your door by one of the
              most handsome shipper in the world!
              <FontAwesomeIcon icon={faHeart} className=" text-red-400" />
            </div>
            <Link to="/purchase-food">
            <button className="bg-red-400 hover:bg-red-500 rounded-2xl w-80 h-16 font-semibold text-white text-2xl">
              Sounds great! Let's find out
            </button>
            </Link>
          </div>
          <img
            src={foodstore}
            className="w-[46%] h-80 rounded-xl"
            alt="beach background"
          />
        </div>
      </div>
      {/*End Food */}

      {/*Futureplan */}
      <div className="parallelogram-left"></div>
      {/*End Futureplan */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
