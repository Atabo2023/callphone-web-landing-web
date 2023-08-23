import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";

export const UssdSec = () => {
  return (
    <>
      <div className="md:flex md:p-10">
        <div className="md:w-1/2">
          <p className="text-4xl font-bold px-16 py-5">USSD</p>
          <p className="text-lg font-light px-16 py-3 text-justify md:w-4/5 w-full">
            Money transfers and Crediting, Airtime recharges on all networks, TV
            Decoder Subscriptions... Money transfers and Crediting, Airtime
            recharges on all networks, TV Decoder Subscriptions...
          </p>
          <div className="px-16">
            <img src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="box-border m-5 p-16 h-5/6 border border-transparent rounded-3xl bg-[#F2FCFF] md:w-1/2">
          image here
        </div>
      </div>
    </>
  );
};
