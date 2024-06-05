import React, { useState, useEffect } from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import "tailwindcss/tailwind.css";
import us from "../images/kiss.png";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

import { TypeAnimation } from "react-type-animation";

const AboutHer = () => {
  const startDate = new Date("2022-07-15T11:00:00");
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const years = differenceInYears(now, startDate);
      const months = differenceInMonths(now, startDate) % 12;
      const days = differenceInDays(now, startDate) % 30;
      const hours = differenceInHours(now, startDate) % 24;
      const minutes = differenceInMinutes(now, startDate) % 60;
      const seconds = differenceInSeconds(now, startDate) % 60;

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeElapsed, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <Headers />
      </div>

      <div className=" max-w-full bg-gradient-to-bl from-[#FED9B7] to-[#F07167] fade-in">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between px-20">
            <img
              src={us}
              className="w-[450px] h-[525px] rounded-full "
              alt="beach background"
            />
            <div className="flex flex-col justify-center items-center pl-10 w-[105%]">
              <div className="flex flex-row gap-4 text-6xl font-bold pt-40 courgette-regular">
                <h1 className="text-red-400">Loving you is</h1>
                <TypeAnimation
                  sequence={[
                    "a gift",
                    1500,
                    "b",
                    1500,
                    "c",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className=" text-red-300"
                />
              </div>

              <div className="text-xl text-pink-500 font-extrabold pt-10">
                {timeElapsed.years} years, {timeElapsed.months} months,{" "}
                {timeElapsed.days} days, {timeElapsed.hours} hours,{" "}
                {timeElapsed.minutes} minutes, {timeElapsed.seconds} seconds in
                love
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutHer;
