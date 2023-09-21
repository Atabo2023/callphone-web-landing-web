import React from "react";
import Image from "../../../assets/images/image8.svg";
// import { RequestDemobtn } from "../../../../components/Buttons/RequestDemoBtn";

const HeroCareer = () => {
  return (
    <>
      <div className="bg-[#e5effd] p-5 mt-1 lg:flex md:grid">
        <div className="lg:w-2/5">
          <div className="text-6xl font-bold mt-20 w-85 p-8 leading-tight">
            <h2>
              Build Your <span className="text-[#4834d4]">Career</span> with
              Callphone Limited
            </h2>
          </div>
          <div>
            <p className="font-normal pl-8 lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Ready to do your best work in Fintech? Explore career
              opportunities at Callphone Limited and learn more about our
              culture.
            </p>
            {/* <RequestDemobtn /> */}
          </div>
          <div className="p-8 justify-between">{/* <StoreDownload /> */}</div>
        </div>
        <div className="p-20 m-10">
          <img src={Image} alt="img" />
        </div>
      </div>
    </>
  );
};

export default HeroCareer;
