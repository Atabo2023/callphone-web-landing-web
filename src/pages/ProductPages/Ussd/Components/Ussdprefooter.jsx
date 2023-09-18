import React from "react";
import phone2 from "../../../../assets/images/phoneImage2.svg";
import { ContactbtOutline } from "../../../../components/Buttons/ContactBtn";

const UssdPrefooter = () => {
  return (
    <div className="bg-[#4834d4] text-white">
      <div className=" px-20 py-20 justify-center flex">
        <div className="pr-5">
          <img src={phone2} alt="img" />
        </div>
        <div className="p-5 text-xl  w-1/2 mt-10">
          <p className="text-4xl font-medium w-4/5 text-left ">
            One universal recharge pin for all networks
          </p>
          <ContactbtOutline/>
        </div>
      </div>
    </div>
  );
};

export default UssdPrefooter;
