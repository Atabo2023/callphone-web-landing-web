import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import image01 from "../../../../assets/icons/miniIcon/airgatedesk.svg";
import { scrollToTop } from "../../../../utils";

export const AirgateSec = () => {
  return (
    <>
      <div className="box-border p-10 border border-transparent rounded-3xl bg-[#e5effd] m-5  h-80 md:h-[480px]">
        <p className="text-4xl font-bold  py-3">Airgate</p>
        <p className="text-base font-light w-full text-[#565555] tracking-wide leading-relaxed h-24">
          Experience a new level of robust payment gateway with well-documented
          APIs structured to simplify the development process.
        </p>
        <div className="mt-9 lg:flex">
          <Link
            className="flex items-center space-x-2"
            to="/airgate"
            onClick={scrollToTop}
          >
            <p className="text-sm">Learn more</p>
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div className="hidden md:flex md:justify-end">
          <img
            src={image01}
            alt="Payment gateway"
            className="lg:p-0 p-10 scale-125 lg:ml-60 w-60"
          />
        </div>
      </div>
    </>
  );
};
