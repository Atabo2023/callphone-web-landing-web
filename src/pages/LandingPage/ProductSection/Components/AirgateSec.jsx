import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";

export const AirgateSec = () => {
  return (
    <>
      {/* <div className="flex p-10 md:grid w-0 grid-cols-1"> */}
      <div className="md:flex md:p-10">
        <div className="md:w-1/2">
          <p className="text-4xl font-bold px-16 py-5">Airgate</p>
          <p className="text-xl font-light px-16 py-3 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
          Experience a new level of robust payment gateway with well-documented APIs structured to simplify the development process. From simple one-page projects to complex products, social media vendors, and more, Airgate empowers businesses to thrive online.
          </p>
          <div className="px-16 mt-5">
            <img src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="box-border m-5 p-16 h-5/6 border border-transparent rounded-3xl bg-[#e5effd] md:w-1/2">
          image here
        </div>
      </div>
    </>
  );
};
