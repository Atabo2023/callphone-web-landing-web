import React from "react";
import ussdimage from "../../../../assets/images/ussdImage.svg";
import { RequestDemobtn } from "../../../../components/Buttons/RequestDemoBtn";
import { Registerbtn } from "../../../../components/Buttons/RegisterBtn";

const UssdHero = () => {
  return (
    <>
      <div className="bg-[#e5effd] px-5 mt-1 lg:flex md:grid">
        <div className="lg:w-2/5">
          <div className="text-6xl font-bold mt-20 w-85 p-8 leading-tight">
            <h2>
              One USSD to Rule them All{" "}
              <span className=" text-[#4834d4]"> (*174#)</span>{" "}
            </h2>
          </div>
          <div>
            <p className="font-normal pl-8 lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Pay all bills, get recharge pins and print recharge vouchers that
              work on all networks using our unique USSD code (*174#).
            </p>
            <Registerbtn />
          </div>
        </div>
        <div className="px-20 pb-20 ml-20">
          <img
            src={ussdimage}
            alt="img"
            className="transform -translate-y-6 translate-x-12"
          />
        </div>
      </div>
    </>
  );
};

export default UssdHero;
