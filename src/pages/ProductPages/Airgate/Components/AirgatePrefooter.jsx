import React from "react";
import image2 from "../../../../assets/images/image2.svg";
import {
  ContactbtOutline,
  WhatsappOutline,
} from "../../../../components/Buttons/ContactBtn";
import { RequestDemobtnOutlined } from "../../../../components/Buttons/RequestDemoBtn";

export const AirgatePrefooter = () => {
  return (
    <div className="flex bg-[#4834d4] text-white justify-center pl-10 text-5xl items-center overflow-hidden ">
      <div className="font-medium text-center justify-center p-20">
        <p>
          It’s safe, secure, well-documented, and easy to integrate. Get Started
          with Airgate API
        </p>

        <p className=" ml-10">
          <div className="p-2">
            <RequestDemobtnOutlined />
          </div>
        </p>
      </div>
    </div>
  );
};
