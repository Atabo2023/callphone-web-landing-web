import React from "react";
import image2 from "../../../../assets/images/image2.svg";
import {
  ContactbtOutline,
  WhatsappOutline,
} from "../../../../components/Buttons/ContactBtn";
import { GetStartedOutlinedBtn } from "../../../../components/Buttons/RegisterBtn";

export const AirgatePrefooter = () => {
  return (
    <div className="flex bg-[#4834d4] text-white justify-center lg:text-3xl text-4xl items-center overflow-hidden ">
      <div className="font-medium text-center justify-center md:p-20 p-5">
        <p>
          It’s safe, secure, well-documented, and easy to integrate. <br></br> Get Started
          with Airgate API
        </p>

        <p className=" md:ml-10">
          <div className="p-2">
           <GetStartedOutlinedBtn/>
          </div>
        </p>
      </div>
    </div>
  );
};
