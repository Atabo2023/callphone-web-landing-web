import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";

export const AirpaySec = () => {
  return (
    <>
      <div className="md:flex md:p-10">
        <div className="box-border p-16 m-5 h-5/6 border border-transparent rounded-3xl bg-[#FEFFEC] md:w-1/2">
          image here
        </div>
        <div className="md:w-1/2">
          <p className="text-4xl font-bold px-16 py-5">Airpay</p>
          <p className="text-lg font-light px-16 py-3 text-justify md:w-4/5 w-full">
            Airgate is a payment gateway infrastructure product of Callphone
            Ltd, an impact-driven payment solution and virtual services
            distribution provider company registered under the law (RC 957797)
            by the Federal Republic of Nigeria.
          </p>
          <div className="px-16">
            <img src={Arrow} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
