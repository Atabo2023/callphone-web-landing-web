import { Button } from "antd";
import React from "react";
import image2 from "../../../../assets/images/image2.svg";
import { StoreDownload } from "../../../../components/Downloads/StoreDownload";

const Hero = () => {
  return (
    <>
      <div className="bg-[#e5effd] p-5 mt-1 lg:flex md:grid">
        <div className="lg:w-2/5">
          <div className="text-6xl font-bold mt-20 w-85 p-8">
            <h2>
              One <span className=" text-[#4834d4]">App</span> For All Bills
            </h2>
          </div>
          <div>
            <p className="font-normal pl-8 lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Spending your hard-earned money shouldn’t be stressful. Enjoy 100%
              cashless, fast, and affordable transactions. One secure solution
              for all your online bill payments. You don’t need 1000 apps to pay
              your bills.
            </p>
          </div>
          <div className="p-8 justify-between">
            <StoreDownload />
          </div>
        </div>
        <div>
          <img src={image2} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
