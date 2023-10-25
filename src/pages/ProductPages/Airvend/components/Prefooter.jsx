import React from "react";
import phone2 from "../../../../assets/images/phoneImage2.svg";
// import phone02 from "../../../../assets/images/SiteImages/Airvend.png";
import { StoreDownload } from "../../../../components/Downloads/StoreDownload";

const Prefooter = () => {
  return (
    <div className="bg-[#4834d4] text-white">
      <div className="px-5 md:px-10 justify-center flex">
        <div className="hidden md:flex md:pl-16">
          <img src={phone2} alt="img" />
        </div>
        <div className="md:p-5 text-xl lg:w-1/2 lg:mt-20 mt-10 leading-loose">
          <p className="mx-1 md:text-4xl text-2xl font-medium lg:w-4/5 w-full text-left leading-relaxed lg:mt-20">
            Bills shouldn’t stress you. <br></br> You deserve to breathe.
            #UseYourAir. Download Airvend.
          </p>
          {/* <p className="text-xl py-10 w-4/5 text-justify ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            alias totam porro illo modi nulla impedit autem ducimus magnamtur,
            eaque.
          </p> */}
          <div className="my-8">
          <StoreDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
