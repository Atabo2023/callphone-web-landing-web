import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import image01 from "../../../../assets/icons/miniIcon/airpaypos.svg";
import image from "../../../../assets/images/SiteImages/pos-removebg.png";
// import image4 from "../../../../assets/images/image4.svg";

export const AirpaySec = () => {
  return (
    <>
      <div className="box-border p-10 border border-transparent rounded-3xl bg-[#e5effd] m-5">
        <p className="text-4xl font-bold py-5">Airpay</p>
        <p className="text-xl font-light text-justify tracking-wide leading-relaxed">
          Payment collection solution for smart businesses. Operate a business
          without financial boundaries. With Airpay, no cash, no worries;
          customers will pay however they want. Our agency banking solution
          empowers you with limitless money possibilities.
        </p>
        <div className="my-8 lg:flex hidden">
          <Link to="/airpay">
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div>
          <img
            src={image01}
            alt="img"
            className=" lg:p-0 p-10 scale-125 lg:ml-80" 
          />
        </div>
      </div>
    </>
  );
};
