import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import PhoneImg from "../../../../assets/icons/miniIcon/phone.svg";

const AirvendSec = () => {
  const [animamte, setAnimamte] = useState(false);
  return (
    <div className="md:flex md:p-10">
      <div className="md:w-1/2">
        <p className="text-4xl font-bold px-16 py-5">Airvend</p>
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
            // onClick={animateSVG}
          />
        </div>
      </div>
      <div className="box-border m-5 p-16 h-5/6 border border-transparent rounded-3xl bg-[#e5effd] md:w-1/2">
        {/* <motion.div > */}
        <motion.div
          whileHover={{ scale: 1.2, x: 200 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={PhoneImg}
            alt="img"
            // style={{ transform: `scale(${scale})` }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AirvendSec;
