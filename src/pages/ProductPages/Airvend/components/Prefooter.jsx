import React from "react";
import phone2 from "../../../../assets/images/phoneImage2.svg";
import { StoreDownload } from "../../../../components/Downloads/StoreDownload";

const Prefooter = () => {
  return (
    <div className="bg-[#4834d4] text-white">
      <div className=" px-20 py-20 justify-center flex">
        <div className="pr-5">
          <img src={phone2} alt="img" />
        </div>
        <div className="p-5 text-xl  w-1/2 mt-10">
          <p className="text-4xl font-medium w-4/5 text-left ">
            Bills shouldn’t stress you. <br></br> You deserve to breathe.
            #UseYourAir. Download Airvend.
          </p>
          <p className="text-xl py-10 w-4/5 text-justify ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            alias totam porro illo modi nulla impedit autem ducimus magnamtur,
            eaque.
          </p>
          <StoreDownload />
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
