import React from "react";
import CbnIcon from "../../assets/icons/cbn.svg";
import NccIcon from "../../assets/icons/ncc.svg";
import NitdaIcon from "../../assets/icons/nitda.svg";
import PicIcon from "../../assets/icons/pic.svg";
import PssbIcon from "../../assets/icons/pssb.svg";
import SanefIcon from "../../assets/icons/sanef.svg";
import InterswitchIcon from "../../assets/icons/interswitch.svg";
import GrandtowersIcon from "../../assets/icons/grandtowers.svg";
export const LicenceSection = () => {
  return (
    <div className="bg-neutral-100 lg:flex gap-10 hidden md:visible">
      <div className="font-normal pl-16 py-8 text-lg"> Licenced by: </div>
      <div className="lg:p-6 ">
        <img src={CbnIcon} alt="icon" />
      </div>
      <div className="lg:p-8 ">
        <img src={NccIcon} alt="icon" />
      </div>
      <div className="lg:p-6 ">
        <img src={NitdaIcon} alt="icon" />
      </div>
      <div className="lg:p-7 ">
        <img src={PicIcon} alt="icon" />
      </div>
      <div className="lg:p-7 ">
        <img src={PssbIcon} alt="icon" />
      </div>
      <div className="lg:p-7 ">
        <img src={SanefIcon} alt="icon" />
      </div>
      <div className="lg:p-6 ">
        <img src={InterswitchIcon} alt="icon" />
      </div>
      <div>
        <img src={GrandtowersIcon} alt="icon" />
      </div>
    </div>
  );
};
