import React from "react";
// import { easeIn, motion } from "framer-motion";
import Arrow from "../../../../assets/icons/miniIcon/arrow2.svg";
import PhoneImg from "../../../../assets/icons/miniIcon/phone.svg";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../utils";

const AirvendSec = () => {
  return (
    <div className="box-border p-5 md:p-10 border-transparent rounded-3xl bg-[#5A6DED] m-5 h-80 md:h-[480px]">
      <p className="text-4xl font-bold py-3 text-[#ffffff]">Airvend</p>
      <p className="text-base font-light  text-[#ffffff] tracking-wide leading-relaxed h-24">
        One mobile app for all bills. Pay bills online with Airvend and enjoy
        easy, fast, and affordable transactions - one secure solution for all
        online bill payments.
      </p>
      <div className="mt-9 lg:flex">
        <Link
          className="flex items-center space-x-2"
          to="/airvend"
          onClick={scrollToTop}
        >
          <p className="text-white text-sm">Learn more</p>
          <img
            src={Arrow}
            alt="Airtime and Mobile top up"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="hidden md:flex md:justify-end">
        <img src={PhoneImg} alt="img" className=" w-36" />
      </div>
    </div>
  );
};

export default AirvendSec;
