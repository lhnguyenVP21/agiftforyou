import React from "react";
import { useState } from "react";
import Headers from "../components/FoodHeader";
import Footer from "../components/Footer";
import crab from "../images/crabfood.png";
import hanur from "../images/hanur.png";
import tiramisu from "../images/tiramisu.png";
import bundau from "../images/bundau.png";
import banhcanhcua from "../images/banhcanhcua.png";
import lauhaisan from "../images/lauhaisan.png";
import bg from "../images/home-banner-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock, faList } from "@fortawesome/free-solid-svg-icons";
const PurchaseFood = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="">
      <div>
        <Headers />
      </div>
      <div>
        <img
          src={bg}
          className="w-[500px] h-auto pr-5 absolute top-1 right-[-20px] z-[-2]"
          alt="beach background"
        />
      </div>
      <div>
        <div className="flex flex-row items-center pl-6">
          <div className="flex flex-col gap-10">
            <div className="text-6xl font-semibold w-[750px] text-red-400 font-noto-serif">
              Delicious Dishes Delivered to Your Door
            </div>
            <p className="text-2xl text-gray-400">
              Just imagine the convenience of having your favorite meals
              delivered straight to your doorstep by your loved one. How
              romantic it is!
              <FontAwesomeIcon icon={faHeart} className="text-red-400" />
            </p>
            <button
              className="hover:bg-rose-quartz w-40 h-16 rounded-2xl font-semibold bg-rose-200 text-red-400 hover:text-white text-2xl"
              onClick={togglePopup}
            >
              Order now!!!
            </button>

            {isPopupVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Order Details</h2>
                  <p>Add your content here...</p>
                  <button
                    className="mt-4 px-4 py-2 bg-red-400 text-white rounded-lg"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <img
            src={crab}
            className="w-[500px] h-auto pr-5"
            alt="beach background"
          />
        </div>
      </div>

      <div className="mx-[5%] w-[90%] rounded-2xl my-10 bg-red-100">
        <div className="text-7xl font-semibold text-center text-red-400 font-noto-serif pt-10 pb-5">
          Why Choose Us?
        </div>
        <p className="text-center text-2xl text-red-300">
          We offer you delicious dishes and reliable delivery, and a commitment
          to giving you the best taste.
        </p>
        <div className="flex flex-row gap-20 justify-evenly py-10">
          <div className="flex flex-col bg-red-200 w-[25%] text-center py-4 rounded-[10px]">
            <FontAwesomeIcon icon={faClock} className="text-red-400" />
            <div className="text-red-500 font-bold text-xl">Fast Delivery</div>
            <div className="text-rose-400 font-semibold">
              You will get your food delivered in around 45 minutes.
            </div>
          </div>
          <div className="flex flex-col bg-red-200 w-[25%] text-center py-4 rounded-[10px]">
            <FontAwesomeIcon icon={faList} className="text-red-400" />
            <div className="text-red-500 font-bold text-xl">Diverse Menu</div>
            <div className="text-red-400 font-semibold">
              You will have a wide selections of dishes to choose.
            </div>
          </div>
          <div className="flex flex-col bg-red-200 w-[25%] text-center py-4 rounded-[10px]">
            <FontAwesomeIcon icon={faHeart} className="text-red-400" />
            <div className="text-red-500 font-bold text-xl">Increase Love</div>
            <div className="text-red-400 font-semibold">
              Delivered by your loved one, increase the romance for both people.
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="text-7xl font-semibold text-center text-red-400 font-noto-serif pt-10 pb-5">
          Our Menu
        </div>
        <p className="text-center text-2xl text-red-300">
          Check out some of our most popular and delicious menu items
        </p>
        <div className="flex flex-row gap-10 justify-evenly pb-10">
          <div className="flex flex-col gap-1 mt-[56px]">
            <img
              src={hanur}
              className="w-[300px] h-56 pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Hanur!</div>
            <p>A abc abc abc</p>
          </div>
          <div className="flex flex-col gap-1">
            <img
              src={crab}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Spring roll</div>
            <p>A abc abc abc</p>
          </div>
          <div className="flex flex-col gap-1 mt-[124px] ">
            <img
              src={tiramisu}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Tiramisu</div>
            <p>A abc abc abc</p>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-evenly pb-10">
          <div className="flex flex-col gap-1">
            <img
              src={bundau}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Bun Dau Mam Tom</div>
            <p>A abc abc abc</p>
          </div>
          <div className="flex flex-col gap-1 mt-[90px]">
            <img
              src={lauhaisan}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">HongKong Seafood Hot Pot</div>
            <p>A abc abc abc</p>
          </div>
          <div className="flex flex-col gap-1 mt-[14px]">
            <img
              src={banhcanhcua}
              className="w-[300px] h-[260px] pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Crab Tapioca Noodle Soup</div>
            <p>A abc abc abc</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="hover:bg-rose-quartz w-40 h-16 rounded-2xl font-semibold bg-rose-200 text-red-400 hover:text-white text-2xl animate-bounce"
            onClick={togglePopup}
          >
            Order now!!!
          </button>

          {isPopupVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-center">Order Details</h2>
                <p>Add your content here...</p>
                <div className="flex justify-center gap-5">
                <button
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={togglePopup}
                  >
                    Go to Messenger
                  </button>
                  <button
                    className="mt-4 px-4 py-2 bg-red-400 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PurchaseFood;
