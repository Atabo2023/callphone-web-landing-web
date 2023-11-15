import React from "react";
import Image from "../../../assets/images/image8.svg";
// import { RequestDemobtn } from "../../../../components/Buttons/RequestDemoBtn";

const HeroCareer = () => {
  return (
    <>
      <div className="bg-[#e5effd] p-5 lg:px-28 mt-1 lg:flex md:grid">
        <div className="lg:w-3/5">
          <div className="lg:text-6xl text-4xl font-bold lg:mt-20 w-full text-left p-2 lg:p-0 leading-tight">
            <h2>
              Build Your <span className="text-[#4834d4]">Career</span> with
              Callphone Limited
            </h2>
          </div>
          <div>
            <p className="font-normal mt-5  lg:w-1/2 text-[#565555] text-justify tracking-wide leading-relaxed text-lg">
              Ready to do your best work in Fintech? Explore career
              opportunities at Callphone Limited and learn more about our
              culture.
            </p>
            {/* <RequestDemobtn /> */}
          </div>
        </div>
        <div className="my-10">
          <img src={Image} alt="img" />
        </div>
      </div>
    </>
  );
};

export default HeroCareer;
