import React from "react";
import { Link } from "react-router-dom";
const Propose = () => {
  const moveButton = () => {
    const noButton = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };

  return (
    <div className="mx-auto p-4 text-center bg-blue-100">
      <div className="flex flex-col gap-5 pt-2 courgette-regular text-red-300">
        <h1 className="header_text text-3xl font-bold">
          I've been thinking about you a lot lately
        </h1>
        <h1 className="header_text text-3xl font-bold">
          Would you be my girlfriend?
        </h1>
      </div>
      <div className="gif_container my-2">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
          className="mx-auto"
        />
      </div>
      <div className="flex justify-center mt-2">
        <Link to="/yes">
          <button className="bg-blue-500 text-white px-4 py-2 mr-44 w-20 text-xl rounded-xl hover:bg-blue-600">
            Yes
          </button>
        </Link>

        <button
          className="bg-red-500 text-white px-4 py-2 ml-44 w-20 text-xl relative rounded-xl"
          id="noButton"
          onMouseOver={moveButton}
          onClick={moveButton}
          style={{ position: "absolute" }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Propose;
