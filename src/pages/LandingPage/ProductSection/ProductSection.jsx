import React from "react";
import AirvendSec  from "./Components/AirvendSec";
import { AirpaySec } from "./Components/AirpaySec";
import { AirgateSec } from "./Components/AirgateSec";
import { UssdSec } from "./Components/UssdSec";

export const ProductSection = () => {
  return (
    <>
      <div className="text-4xl font-extrabold text-center p-20">
        Payment <span className="text-[#4834d4]">Solutions</span> for
        Individuals,
        <br />
        Developers, MSMEs, and Organizations
      </div>
      <AirvendSec />
      <AirpaySec />
      <AirgateSec />
      <UssdSec />
    </>
  );
};
