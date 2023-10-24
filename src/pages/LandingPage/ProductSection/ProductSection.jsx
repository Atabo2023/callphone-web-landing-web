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
        className="lg:text-4xl text-2xl font-extrabold text-center lg:p-10 p-10 leading-loose"
      >
        Payment <span className="text-[#4834d4]">Solutions</span> for
        Individuals,
        <br />
        Developers, MSMEs, and Organizations
      </motion.div>
      {/* <div className="lg:px-24 lg:py-10 flex flex-wrap"> */}
      <div className="lg:px-28 h-1/2 lg:py-10 lg:grid grid-cols-2 ">
        <AirvendSec />
        <AirpaySec />
        <div className="order-last">
        <AirgateSec  />
        </div>
        <UssdSec />
      </div>
    </>
  );
};
