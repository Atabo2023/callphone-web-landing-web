import React, { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
import Arrow from "../../../../assets/icons/miniIcon/arrow2.svg";
import PhoneImg from "../../../../assets/icons/miniIcon/phone.svg";
// import PhoneImg from "../../../../assets/images/SiteImages/Airvend.png";
import { Link } from "react-router-dom";

const AirvendSec = () => {
  return (
    <div className="box-border p-10 border-transparent rounded-3xl bg-[#4834d4] m-5">
      <p className="text-4xl font-bold py-5 text-[#ffffff]">Airvend</p>
      <p className="text-xl font-light text-justify text-[#ffffff] tracking-wide leading-relaxed">
        One mobile app for all bills. Pay bills online with Airvend and enjoy
        easy, fast, and affordable transactions - one secure solution for all
        online bill payments.
      </p>
      <div className="my-8 lg:flex hidden">
        <Link to="/airvend">
          <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2,  }}
      >
        <img src={PhoneImg} alt="img" className=" lg:scale-125 md:p-0 py-5 pl-40 translate-y-10" />
      </motion.div>
    </div>
  );
};

export default AirvendSec;
