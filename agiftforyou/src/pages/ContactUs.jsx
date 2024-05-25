import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

export default function ContactUs() {
  const validateEmail = () => {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email address.");

      return;
    }
  };

  return (
    <>
      <Headers />
      <div className="flex flex-col px-[200px] items-center pb-14 justify-center">
        <div className="w-full flex flex-col gap-3 items-center">
          <h2 className="text-6xl font-extrabold pt-10">CONTACT US</h2>
          <i className="text-2xl ">Your feedbacks is highly valuable to us</i>
        </div>
        <div className="flex flex-row gap-4 pt-10">
          <div className="flex flex-col gap-6 w-80 border-solid border-2 border-gray-300 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your first name"
              className="text-xl h-12 pl-2"
            ></input>
          </div>
          <div className="flex flex-col gap-6 w-80 border-solid border-2 border-gray-300 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your last name"
              className="text-xl h-12 pl-2"
            ></input>
          </div>
        </div>
        <div className="flex flex-row gap-4 pt-4">
          <div className="flex flex-col gap-6 w-[656px] border-solid border-2 border-gray-300 ">
            <input
              type="email"
              id="emailInput"
              placeholder="Your email"
              className="text-xl h-12 pl-2"
            ></input>
          </div>
        </div>
        <div className="flex flex-row gap-4 pt-4">
          <div className="flex flex-col gap-6 w-[656px] border-solid border-2 border-gray-300 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your phone number"
              maxLength={10}
              className="text-xl h-12 pl-2"
            ></input>
          </div>
        </div>
        <div className="flex flex-row gap-4 pt-4">
          <div className="flex flex-col gap-6 w-[656px] border-solid border-2 border-gray-300 ">
            <textarea
              rows="5"
              placeholder=" Your message"
              className="text-xl"
              style={{ width: "100%", padding: "5px" }}
            />
          </div>
        </div>
        <i className="pr-24 pl-24 font-bold pt-6">
          WE WOULD LOVE TO EMAIL YOU SPECIAL OFFERS, SO PLEASE TURN ON YOUR
          NOTIFICATIONS. WE WILL ALWAYS TREAT YOUR INFORMATION WITH THE UTMOST
          CARE AND NEVER SHARE IT WITH ANYONE.
        </i>
        <div className="pt-6">
          <button
            onClick={validateEmail}
            className="bg-blue-400 text-white text-xl font-bold h-10 w-28 hover:bg-blue-500"
          >
            SUBMIT
          </button>
        </div>
        <div className="flex flex-row gap-1 text-xl pt-10">
          <p>Or give us a call at: </p>
          <button className="text-blue-500 font-bold hover:underline ">
            0989 123 456{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
