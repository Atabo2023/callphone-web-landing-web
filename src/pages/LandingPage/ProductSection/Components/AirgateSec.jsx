import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import image01 from "../../../../assets/icons/miniIcon/airgatedesk.svg";
import image from "../../../../assets/images/SiteImages/rty.png";

export const AirgateSec = () => {
  return (
    <>
      <div className="box-border p-10 border border-transparent rounded-3xl bg-[#e5effd] m-5">
        <p className="text-4xl font-bold  py-5">Airgate</p>
        <p className="text-xl font-light text-justify w-full text-[#565555] tracking-wide leading-relaxed">
          Experience a new level of robust payment gateway with well-documented
          APIs structured to simplify the development process. From simple
          one-page projects to complex products, social media vendors, and more,
          Airgate empowers businesses to thrive online.
        </p>
        <div className="my-8 lg:flex hidden">
          <Link to="/airgate">
            <img src={Arrow} alt="icon" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div>
          <img
            src={image01}
            alt="img"
            className=" lg:p-0 p-10 scale-125 lg:ml-60"
          />
        </div>
      </div>
    </>
  );
};
