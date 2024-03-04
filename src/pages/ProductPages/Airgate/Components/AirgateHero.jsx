import React from "react";
import airgateImage from "../../../../assets/images/airgateImage.svg";
import airgateImage1 from "../../../../assets/images/SiteImages/rty.png";
import { RequestDemobtn } from "../../../../components/Buttons/RequestDemoBtn";
import { GetStartedBtn } from "../../../../components/Buttons/RegisterBtn";

const AirgateHero = () => {
  return (
    <>
      <div className="bg-[#e5effd] p-5 mt-1 lg:flex md:grid">
        <div className="lg:w-1/2 lg:px-24">
          <div className="lg:text-6xl text-4xl font-semibold lg:mt-20 py-5 leading-tight">
            <h2>Accept Payment from Anyone; Fast and Seamless</h2>
          </div>
          <div className="flex flex-col items-center md:block">
            <p className="font-normal lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Experience a new level of robust payment gateway with
              well-documented APIs structured to simplify the development
              process. From simple one-page projects to complex products, social
              media vendors, and more, Airgate empowers businesses to thrive
              online.
            </p>
            <GetStartedBtn />
          </div>
          <div className="p-8 justify-between">{/* <StoreDownload /> */}</div>
        </div>
        <div className="p-2 lg:w-1/2 w-full">
          <img src={airgateImage1} alt="img" />
        </div>
      </div>
    </>
  );
};

export default AirgateHero;
