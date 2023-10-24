import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow2.svg";
import PhoneImg01 from "../../../../assets/icons/miniIcon/ussdphone.svg";
// import PhoneImg from "../../../../assets/icons/miniIcon/phone.svg";
// import PhoneImg from "../../../../assets/images/SiteImages/call_screen_1.png";
import { Link } from "react-router-dom";
export const UssdSec = () => {
  return (
    <>
      <div className="box-border p-10 border border-transparent rounded-3xl bg-[#4834d4] m-5">
        <p className="text-4xl font-bold  text-white py-5">USSD</p>
        <p className="text-xl font-light  lg:py-3  text-justify w-full text-[#ffffff] tracking-wide leading-relaxed">
          No internet service. No problem. The Airvend USSD feature allows you
          to make transfers and pay bills online without the internet. Easily
          access your Airvend account and transact on the go with or without
          internet service.
        </p>
        <div className="my-8 lg:flex hidden">
          <Link to="/airvend">
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          <img
            src={PhoneImg01}
            alt="img"
            className=" lg:scale-125 md:p-0 py-8 pl-40 translate-y-10"
          />
        </motion.div>
      </div>
    </>
  );
};
