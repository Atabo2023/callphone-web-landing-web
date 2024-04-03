import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import image01 from "../../../../assets/icons/miniIcon/airpaypos.svg";
import { scrollToTop } from "../../../../utils";

export const AirpaySec = () => {
  return (
    <>
      <div className="box-border p-5 md:p-10 border border-transparent rounded-3xl bg-[#e5effd] m-5 h-80 md:h-[480px]">
        <p className="text-4xl font-bold py-5">Airpay</p>
        <p className="text-base font-light tracking-wide leading-relaxed h-24">
          Payment collection solution for smart businesses. Operate a business
          without financial boundaries. With Airpay, no cash, no worries;
          customers will pay however they want.
        </p>
        <div className="mt-14 md:my-8 lg:flex">
          <Link
            className="flex items-center space-x-2"
            to="/airpay"
            onClick={scrollToTop}
          >
            <p className="text-sm">Learn more</p>
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div className="hidden md:flex md:justify-end">
          <img
            src={image01}
            alt="Callphone POS terminal"
            className=" lg:p-0 p-10 scale-125 lg:ml-80 w-24"
          />
        </div>
      </div>
    </>
  );
};
