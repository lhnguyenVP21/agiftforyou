import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function YesPropose() {
  return (
    <div className="flex justify-center items-center bg-blue-100 flex flex-col gap-5 py-2">
      <div className="text-4xl text-red-300 font-extrabold text-center">
        <h1>Yayyyyy!</h1>
        <h1>
          I love you too. Let's hang out tonight, shall we?
          <FontAwesomeIcon icon={faHeart} className=" pl-1 text-red-400 pt-6" />
        </h1>
      </div>
      <div className="gif_container">
        <img
          src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="flex flex-row gap-2 text-2xl font-extrabold text-center ">
        <div className="text-red-400">Or we can</div>
        <Link to="/purchase-food">
          <div className="text-blue-400 underline cursor-pointer hover:text-blue-500">
            order food
          </div>
        </Link>

        <div className="text-red-400">here as well</div>
      </div>
    </div>
  );
}

export default YesPropose;
