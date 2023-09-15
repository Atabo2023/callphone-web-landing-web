import React from "react";
import image2 from "../../../../assets/images/image2.svg";
import {
  ContactbtOutline,
  WhatsappOutline,
} from "../../../../components/Buttons/ContactBtn";

export const AirpayPrefooter = () => {
  return (
    <div className="flex bg-[#4834d4] text-white justify-center pl-10 text-4xl items-center overflow-hidden ">
      <div className=" w-5/6 text-center justify-center pl-60">
        <p>
          Enjoy seamless transactions with Airvend POS. Easily collect payments,
          and make deposits and withdrawals today. Call or Chat now to get a
          POS.{" "}
        </p>
        <p className="flex ml-10">
          <div className="p-2">
            <ContactbtOutline />{" "}
          </div>
          <div className="p-2">
            <WhatsappOutline />
          </div>
        </p>
      </div>

      <div className=" overflow-hidden">
        <img
          className="transform translate-x-1/2 translate-y-14"
          src={image2}
          alt="img"
        />
      </div>
    </div>
  );
};
