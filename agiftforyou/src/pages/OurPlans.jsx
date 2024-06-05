import React from "react";
import OurPlansHeader from "../components/OurPlansHeader";
import Hero from "../components/Hero";
import Footer from "../components/HomeFooter";
const OurPlans = () => {
  return (
    <>
      <div>
        <OurPlansHeader />
      </div>
      <div>
        <Hero/>
      </div>
      <div className>
        <div className="text-center text-6xl text-blue-400 py-10 font-melodrama">
          Top places in Ho Chi Minh City
        </div>
        <div className="">

        </div>
        <div className="flex flex-col gap-10 justify-center items-center pb-16">
          <div className="flex flex-row gap-24">
            <div className="bg-blue-300 shadow-xl w-[500px] h-48"></div>
            <div className="bg-blue-300 shadow-xl w-[500px] h-48"></div>
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center pb-16">
          <div className="flex flex-row gap-24">
            <div className="bg-blue-300 shadow-xl w-[500px] h-48"></div>
            <div className="bg-blue-300 shadow-xl w-[500px] h-48"></div>
          </div>
        </div>
        

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default OurPlans;
