import React from "react";
import AirvendSec from "./Components/AirvendSec";
import { AirpaySec } from "./Components/AirpaySec";
import { AirgateSec } from "./Components/AirgateSec";
import { UssdSec } from "./Components/UssdSec";
import { motion } from "framer-motion";

export const ProductSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        id="scrollProduct"
        className="lg:text-4xl text-2xl font-extrabold text-center lg:p-10 p-10 leading-loose flex flex-col items-center"
      >
        <h1>
          Our <span className="text-[#4834d4]">Services</span>
        </h1>
        <p className="text-base md:text-xl font-light text-center py-5 md:py-10 px-5 md:w-1/2 w-full text-[#565555] tracking-wide leading-relaxed">
          We Offer Payment Solutions for Individuals, Developers, MSMEs, and
          Organizations.
        </p>
      </motion.div>
      {/* <div className="lg:px-24 lg:py-10 flex flex-wrap"> */}
      <div className="lg:px-28 h-1/2 lg:py-10 lg:grid grid-cols-2 ">
        <AirvendSec />
        <AirpaySec />
        <AirgateSec />
        <UssdSec />
      </div>
    </>
  );
};
