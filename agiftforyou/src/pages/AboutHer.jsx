import React, { useState, useEffect } from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHeart } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import us from "../images/kiss.png";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineElements from "./timelineElements";

import { TypeAnimation } from "react-type-animation";

import { Link } from "react-router-dom";

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

  let workIconStyles = { background: "#ff0000" };
  let schoolIconStyles = { background: "#ff0000" };
  return (
    <>
      <div>
        <Headers />
      </div>

      <div className=" max-w-full ">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between px-10 pt-20 pb-40 bg-pink-200">
            <img
              src={us}
              className="w-[300px] h-[425px] rounded-full flex  "
              alt="beach background"
            />
            <div className="flex flex-col justify-center items-center pl-10 pb-20 w-[105%]">
              <div className="flex flex-row gap-4 text-6xl font-bold pt-40 courgette-regular">
                <h1 className="text-red-500">Loving you is</h1>
                <TypeAnimation
                  sequence={[
                    "a gift.",
                    1500,
                    "my happiness.",
                    1500,
                    "a true dream.",
                    1500,
                    "a miracle.",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className=" text-red-600"
                />
              </div>

              <div className="text-2xl text-red-500 font-extrabold pt-10">
                {timeElapsed.years} years, {timeElapsed.months} months,{" "}
                {timeElapsed.days} days, {timeElapsed.hours} hours,{" "}
                {timeElapsed.minutes} minutes, {timeElapsed.seconds} seconds in
                love
              </div>
            </div>
          </div>
          <div className="max-w-full bg-gradient-to-bl from-[#FED9B7] to-[#F07197]">
            <h3 className ="font-bold text-white text-4xl text-center py-5">Our Journey</h3>
            <VerticalTimeline>
              {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                  element.buttonText !== undefined &&
                  element.buttonText !== null &&
                  element.buttonText !== "";

                  return (
                    <VerticalTimelineElement
                      key={element.key}
                      date={element.date}
                      dateClassName="date"
                      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                      icon={
                        <FontAwesomeIcon
                          icon={isWorkIcon ? faBriefcase : faHeart}
                          className="text-red-200"
                        />
                      }
                    >
                      <div className="flex flex-row justify-between gap-3">
                        <div>
                          <h3 className="vertical-timeline-element-title font-bold">
                            {element.title}
                          </h3>
                          <p id="description">{element.description}</p>
                          {showButton && (
                            <a
                              className={`button ${
                                isWorkIcon ? "workButton" : "schoolButton"
                              }`}
                              href="/"
                            >
                              {element.buttonText}
                            </a>
                          )}
                        </div>
  
                        <img
                          src={element.image}
                          alt="Sample"
                          className="w-44 h-36 object-cover"
                        />
                      </div>
                    </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
          <button>
            <Link to ="/proposal">abc</Link>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutHer;
