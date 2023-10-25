import React from "react";
import ussdimage from "../../../../assets/images/ussdImage.svg";
import { Registerbtn } from "../../../../components/Buttons/RegisterBtn";
import { easeInOut, motion } from "framer-motion";

const UssdHero = () => {
  return (
    <>
      <div
        className="bg-[#e5effd] lg:px-24  mt-1 flex lg:flex-row flex-col-reverse"
        style={{
          // backgroundImage: `url(${bgimage})`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "right",
          display: "hidden",
        }}
      >
        <div className="lg:w-1/2">
          <div className="md:text-6xl text-2xl font-bold lg:mt-20 w-85 p-8 leading-tight">
            <h2>
              One USSD to Rule them All{" "}
              <span className=" text-[#4834d4]"> (*174#)</span>{" "}
            </h2>
          </div>
          <div>
            <p className="font-normal pl-8 lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Pay all bills, get recharge pins and print recharge vouchers that
              work on all networks using our unique USSD code (*174#).
            </p>
            <Registerbtn />
          </div>
        </div>
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }} // Rotate 360 degrees (1 full rotation)
          transition={{
            duration: 10,
            repeat: Infinity, 
            ease: "easeOut", 
          }}
          className="lg:ml-20 pr-20 lg:py-5 scale-300"
        >
          <img
            src={ussdimage}
            alt="img"
            className="transform -translate-y-6 translate-x-12"
          />
        </motion.div>
      </div>
    </>
  );
};

export default UssdHero;
