import React from "react";
import CbnIcon from "../../assets/icons/cbn.svg";
import NccIcon from "../../assets/icons/ncc.svg";
import NitdaIcon from "../../assets/icons/nitda.svg";
import PicIcon from "../../assets/icons/pic.svg";
import PssbIcon from "../../assets/icons/pssb.svg";
import SanefIcon from "../../assets/icons/sanef.svg";
import InterswitchIcon from "../../assets/icons/interswitch.svg";
// import GrandtowersIcon from "../../assets/icons/grandtowers.svg";
export const LicenceSection = () => {
  return (
    <div className="md:flex my-8 bg-[#e5effd] gap-5 hidden md:visible">
      <div className="font-normal text-lg"> Trusted by: </div>
      <div>
        <img src={CbnIcon} alt="icon" />
      </div>
      <div className="mt-2">
        <img src={NccIcon} alt="icon" />
      </div>
      <div>
        <img src={NitdaIcon} alt="icon" />
      </div>
      <div className="mt-2">
        <img src={PicIcon} alt="icon" />
      </div>
      <div className="mt-2">
        <img src={PssbIcon} alt="icon" />
      </div>
      {/* <div className="lg:p-7 ">
        <img src={SanefIcon} alt="icon" />
      </div>
      <div className="lg:p-6 ">
        <img src={InterswitchIcon} alt="icon" />
      </div> */}
      
    </div>
  );
};
