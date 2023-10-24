import React from "react";
import phone2 from "../../../../assets/images/phoneImage2.svg";
import usdimg from "../../../../assets/images/SiteImages/call_screen_1.png";
import { ContactbtOutline } from "../../../../components/Buttons/ContactBtn";

const UssdPrefooter = () => {
  return (
    <div className="bg-[#4834d4]  text-white">
      <div className="justify-center flex">
        {/* <div className="hidden md:flex py-2">
          <img src={usdimg} alt="img" 
          style={{width: 300}}
          />
        </div> */}
        <div className="text-xl md:my-20 mt-7 ">
          <p className="md:text-4xl text-2xl font-medium text-center ">
            One universal recharge <br></br> pin for all networks
          </p>
          <div className="md:py-10 py-5 text-center">
            <ContactbtOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UssdPrefooter;
