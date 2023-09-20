import React from "react";
import airgateImage from "../../../../assets/images/airgateImage.svg";
import { RequestDemobtn } from "../../../../components/Buttons/RequestDemoBtn";

const AirgateHero = () => {
  return (
    <>
      <div className="bg-[#e5effd] p-5 mt-1 lg:flex md:grid">
        <div className="lg:w-2/5">
          <div className="text-6xl font-bold mt-20 w-85 p-8 leading-tight">
            <h2>Accept Payment from Anyone; Fast and Seamless</h2>
          </div>
          <div>
            <p className="font-normal pl-8 lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Experience a new level of robust payment gateway with
              well-documented APIs structured to simplify the development
              process. From simple one-page projects to complex products, social
              media vendors, and more, Airgate empowers businesses to thrive
              online.
            </p>
            <RequestDemobtn />
          </div>
          <div className="p-8 justify-between">{/* <StoreDownload /> */}</div>
        </div>
        <div className="p-20 m-10">
          <img src={airgateImage} alt="img" />
        </div>
      </div>
    </>
  );
};

export default AirgateHero;
