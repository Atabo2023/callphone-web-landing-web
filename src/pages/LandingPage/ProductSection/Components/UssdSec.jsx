import React from "react";
// import { motion } from "framer-motion";
import Arrow from "../../../../assets/icons/miniIcon/arrow2.svg";
import PhoneImg01 from "../../../../assets/icons/miniIcon/ussdphone.svg";

import { Link } from "react-router-dom";
export const UssdSec = () => {
  return (
    <>
      <div className="box-border p-10 border border-transparent rounded-3xl bg-[#5A6DED] m-5 h-80 md:h-[480px]">
        <p className="text-4xl font-bold  text-white py-5">USSD</p>
        <p className="text-base font-light  lg:py-3 w-full text-[#ffffff] tracking-wide leading-relaxed h-24">
          No internet service. No problem. The Airvend USSD feature allows you
          to make transfers and pay bills online without the internet.
        </p>
        <div className="mt-11 md:my-8 lg:flex">
          <Link className="flex items-center space-x-2" to="/UssdPage">
            <p className="text-white text-sm">Learn more</p>
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div className="hidden md:flex md:justify-end">
          <img src={PhoneImg01} alt="Callphone USSD code" className=" w-16" />
        </div>
      </div>
    </>
  );
};
