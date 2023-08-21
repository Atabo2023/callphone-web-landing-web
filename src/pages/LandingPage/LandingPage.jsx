import React from "react";
import Image from "../../assets/images/image.svg";
// import image from ../

export const LandingPage = () => {
  return (
    <div className="bg-violet-50 p-5 mt-1 flex">
      <div className="text-6xl font-extrabold mt-60 w-85 p-5">
        <h2>Digital Payment <br></br>Simplifed For</h2>
        <h1 className="underline text-[#4834d4]">Everyone.</h1>
      </div>
      <div className="mt-40 ml-10 p-5">
        <img src={Image} alt="image" />
      </div>
    </div>
  );
};
