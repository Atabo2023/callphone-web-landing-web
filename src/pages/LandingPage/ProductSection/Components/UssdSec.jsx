import { useState, useEffect } from "react";
import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import PhoneImg from "../../../../assets/icons/miniIcon/phone.svg";

export const UssdSec = () => {
  const [scale, setScale] = useState(1);
  const [increasing, setIncreasing] = useState(true);

  const animateSVG = () => {
    setScale((prevScale) => (increasing ? prevScale + 0.01 : prevScale - 0.01));
    if (scale >= 1.2 || scale <= 1) {
      setIncreasing((prevIncreasing) => !prevIncreasing);
    }
  };

  useEffect(() => {
    const interval = setInterval(animateSVG, 5); // Roughly 60 FPS animation
    return () => clearInterval(interval);
  }, [scale, increasing]);

  return (
    <>
      <div className="md:flex md:p-10">
        <div className="box-border m-5 p-16 h-5/6 border border-transparent rounded-3xl bg-[#e5effd] md:w-1/2">
          <img
            src={PhoneImg}
            alt="img"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-4xl font-bold px-16 py-5">USSD</p>
          <p className="text-xl font-light px-16 py-3 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Money transfers and Crediting, Airtime recharges on all networks, TV
            Decoder Subscriptions... Money transfers and Crediting, Airtime
            recharges on all networks, TV Decoder Subscriptions...
          </p>
          <div className="px-16 mt-5">
            <img
              src={Arrow}
              alt="icon"
              style={{ cursor: "pointer" }}
              onClick={animateSVG}
            />
          </div>
        </div>
      </div>
    </>
  );
};
