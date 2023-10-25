import React from "react";
import grandTIcon from "../../assets/icons/PartnersIcon/grandtIcon.svg";
import MtnIcon from "../../assets/icons/PartnersIcon/mtnIcon.svg";
import mobileIcon from "../../assets/icons/PartnersIcon/9mobile.svg";
import gtbankIcon from "../../assets/icons/PartnersIcon/gtbank.svg";
import gloIcon from "../../assets/icons/PartnersIcon/gloIcon.svg";
import zenithIcon from "../../assets/icons/PartnersIcon/zenith.svg";
import nibbsIcon from "../../assets/icons/PartnersIcon/nibbs.svg";
import aelexIcon from "../../assets/icons/PartnersIcon/aelex.svg";
import airtelIcon from "../../assets/icons/PartnersIcon/airtel.svg";
import firstIcon from "../../assets/icons/PartnersIcon/firstbank.svg";
import psbIcon from "../../assets/icons/PartnersIcon/psb.svg";
import szztIcon from "../../assets/icons/PartnersIcon/szzt.svg";
import unionIcon from "../../assets/icons/PartnersIcon/unionbank.svg";
import standardIcon from "../../assets/icons/PartnersIcon/standardbank.svg";

export const PartnerSec = () => {
  return (
    <>
      <div className="grid justify-items-center ">
        <p className="text-5xl font-semibold text-center px-20 pt-20">
          Our <span className="text-[#4834d4]">Partners</span>{" "}
        </p>
        <p className="text-xl font-light text-center py-10 px-5 md:w-1/2 w-full text-[#565555] tracking-wide leading-relaxed">
          Callphone is keen in providing our clients and customers with the best
          options readily available in the FinTech industry to guarantee
          effectiveness and efficiency in operation
        </p>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-6 px-6 lg:px-20 py-14 items-center md:ml-10 justify-center">
        <div className="p-5">
          <img src={grandTIcon} alt="icon" />
        </div>
        <div>
          <img src={MtnIcon} alt="icon" />
        </div>
        <div>
          <img src={mobileIcon} alt="icon" />
        </div>
        <div>
          <img src={gtbankIcon} alt="icon" />
        </div>
        <div>
          <img src={gloIcon} alt="icon" />
        </div>
        <div className="p-5">
          <img src={zenithIcon} alt="icon" />
        </div>
        <div className="img-[#0a1f44]">
          <img src={nibbsIcon} alt="icon" />
        </div>
        <div>
          <img src={aelexIcon} alt="icon" />
        </div>
        <div>
          <img src={airtelIcon} alt="icon" />
        </div>
        <div>
          <img src={firstIcon} alt="icon" />
        </div>
        <div>
          <img src={psbIcon} alt="icon" />
        </div>
        <div>
          <img src={szztIcon} alt="icon" />
        </div>
        <div>
          <img src={unionIcon} alt="icon" />
        </div>
        <div>
          <img src={standardIcon} alt="icon" />
        </div>
      </div>
    </>
  );
};
