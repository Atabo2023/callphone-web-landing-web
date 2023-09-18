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
            Airgate is a payment gateway infrastructure product of Callphone
            Ltd, an impact-driven payment solution and virtual services
            distribution provider company registered under the law (RC 957797)
            by the Federal Republic of Nigeria.
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
