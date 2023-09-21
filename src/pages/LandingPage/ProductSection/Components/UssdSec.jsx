import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import PhoneImg from "../../../../assets/icons/miniIcon/phone.svg";

export const UssdSec = () => {
  return (
    <>
      <div className="md:flex md:p-10">
        <div className="box-border m-5 p-16 h-5/6 border border-transparent rounded-3xl bg-[#e5effd] md:w-1/2">
          <motion.div
            whileHover={{ scale: 1.2, x: 200 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={PhoneImg} alt="img" />
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <p className="text-4xl font-bold px-16 py-5">USSD</p>
          <p className="text-xl font-light px-16 py-3 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            No internet service. No problem. The Airvend USSD feature allows you
            to make transfers and pay bills online without the internet. Easily
            access your Airvend account and transact on the go with or without
            internet service.
          </p>
          <div className="px-16 mt-5">
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
};
