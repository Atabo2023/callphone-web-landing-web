import React from "react";
import {
  ContactbtOutline,
  WhatsappOutline,
} from "../../../../components/Buttons/ContactBtn";

export const AirpayPrefooter = () => {
  return (
    <div className="flex p-8 bg-[#4834d4] text-white justify-center lg:text-3xl text-xl items-center ">
      <div className=" lg:w-1/2  text-center justify-center ">
        <p className="lg:p-0 p-5 leading-relaxed">
          Enjoy seamless transactions with Airvend POS. Easily collect payments,
          and make deposits and withdrawals today. Call or Chat now to get a
          POS.{" "}
        </p>
        <div className="md:flex md:my-12 justify-center ">
          <div className="p-5">
            <ContactbtOutline />
          </div>
          <div className="p-5">
            <WhatsappOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
