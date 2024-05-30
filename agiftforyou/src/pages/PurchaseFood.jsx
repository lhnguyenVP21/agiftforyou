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
import shipper from "../images/shipper.jpg";
import dang from "../images/dang.jpg";
import tan from "../images/tantruong.jpg";
import kha from "../images/kha.jpg";
import bg from "../images/home-banner-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
  faList,
  faSmile,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
              Order now
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
            <p>Authentic Korean flavors food</p>
          </div>
          <div className="flex flex-col gap-1">
            <img
              src={crab}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Spring roll</div>
            <p>Veges & meat wrapped in a wrapper</p>
          </div>
          <div className="flex flex-col gap-1 mt-[124px] ">
            <img
              src={tiramisu}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Tiramisu</div>
            <p>Creamy, coffee-infused Italian dessert </p>
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
            <p>Delicious shrimp paste, tofu noodles</p>
          </div>
          <div className="flex flex-col gap-1 mt-[92px]">
            <img
              src={lauhaisan}
              className="w-[300px] h-auto pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">HongKong Seafood Hot Pot</div>
            <p>
              Hotpot with seafood, what else it could be?
              <FontAwesomeIcon
                icon={faSmile}
                className="text-yellow-400 pl-1"
              />
            </p>
          </div>
          <div className="flex flex-col gap-1 mt-[14px]">
            <img
              src={banhcanhcua}
              className="w-[300px] h-[260px] pr-5"
              alt="beach background"
            />
            <div className="text-2xl font-bold">Crab Tapioca Noodle Soup</div>
            <p>
              2 words: TRÈS DÉLICIEUX, Meow's favorite
              <FontAwesomeIcon icon={faHeart} className="text-red-400 pl-1" />
            </p>
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
              <div className="bg-rose-200 p-8 rounded-xl shadow-lg w-[800px] text-center">
                <h2 className="text-3xl font-bold mb-4 text-center uppercase text-red-400">
                  Order Details
                </h2>
                <img
                  src={shipper}
                  className="w-48 h-60 rounded-3xl ml-[280px]"
                  alt="beach background"
                />
                <div className="font-semibold ">
                  Our only shipper is READY! Whenever and whatever you want to
                  eat, just press "Go to Messenger" and text him with the
                  following Magic Words:
                </div>
                <div className="font-bold text-center text-2xl text-red-400 py-5">
                  "Anh Ngoăn iu dấu ơiiii, hôm nay bé Meow muốn ăn + dishes"
                </div>
                <div className="font-semibold">
                  He'll immediately ship those dishes to you within an hour !!!
                </div>
                <div className="flex justify-center gap-5">
                  <button
                    className="font-semibold mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={togglePopup}
                  >
                    <a href="https://facebook.com/messages/e2ee/t/7409040009192054">
                      Go to Messenger
                    </a>
                  </button>
                  <button
                    className=" font-semibold mt-4 px-4 py-2 bg-red-400 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="my-10 mx-16 border-4 border-rose-quartz rounded-2xl">
          <div className="text-7xl font-bold text-center text-red-400 font-noto-serif pt-10 pb-5">
            Testimonials
          </div>
          <p className="text-center text-2xl text-red-300 pb-16">
            What my customers say about our service
          </p>
          <div className="flex flex-row justify-center items-center gap-16 pb-10">
            <div className="flex flex-col pt-10 items-center w-[280px] h-auto gap-2 border-2 border-solid border-rose-quartz rounded-3xl bg-rose-quartz relative">
              <img
                src={dang}
                alt="Facebook"
                className=" w-20 h-20 absolute top-[-25%] rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold text-orange-900 font-noto-serif">
                VO Nam Dang
              </h3>
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>

              <p className="text-center text-[18px] text-orange-900 pb-5">
                Chị An nên sử dụng ứng dụng này, đảm bảo Nguyên ship không thiếu 1 món 
              </p>
            </div>
            <div className="flex flex-col pt-10 items-center w-[280px] h-auto gap-2 border-2 border-solid border-rose-quartz rounded-3xl bg-rose-quartz relative">
              <img
                src={kha}
                alt="Facebook"
                className=" w-20 h-20 absolute top-[-25%] rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold text-orange-900 font-noto-serif">
                TRUONG Hoang Kha
              </h3>
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>

              <p className="text-center text-[18px] text-orange-900 pb-5">
                Nguyên chắc chắn là rất yêu chị An khi làm ra dịch vụ này. Chị An sướng nhé :3
              </p>
            </div>
            <div className="flex flex-col pt-10 items-center w-[280px] h-auto gap-2 border-2 border-solid border-rose-quartz rounded-3xl bg-rose-quartz relative">
              <img
                src={tan}
                alt="Facebook"
                className=" w-20 h-20 absolute top-[-25%] rounded-full object-cover "
              />
              <h3 className="text-2xl font-bold text-orange-900 font-noto-serif">
                TRUONG Kim Tan
              </h3>
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>

              <p className="text-center text-[18px] text-orange-900 pb-5">
                Dịch vụ rất ok, món ăn được lựa và hỏi kĩ càng. Khuyến khích An nên sử dụng.
              </p>
            </div>
            
            
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PurchaseFood;
