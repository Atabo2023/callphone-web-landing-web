import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";

export const AirpaySec = () => {
  return (
    <>
      <div className="md:flex md:p-10">
        <div className="box-border p-16 m-5 h-5/6 border border-transparent rounded-3xl bg-[#e5effd] md:w-1/2">
          image here
        </div>
        <div className="md:w-1/2">
          <p className="text-4xl font-bold px-16 py-5">Airpay</p>
          <p className="text-xl font-light px-16 py-3 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Payment collection solution for smart businesses. Operate a business
            without financial boundaries. With Airpay, no cash, no worries;
            customers will pay however they want. Our agency banking solution
            empowers you with limitless money possibilities.
          </p>
          <div className="px-16 mt-5">
            <img src={Arrow} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
