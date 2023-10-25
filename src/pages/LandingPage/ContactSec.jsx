import React from "react";
import { ContactbtOutline } from "../../components/Buttons/ContactBtn";
import bgImage from "../../assets/images/BgImages/bgImage1.svg";
import miniphone from "../../assets/icons/miniIcon/miniphone.svg";
import { motion } from "framer-motion";

export const ContactSec = () => {
  return (
    <section>
      <div
        className="flex bg-[#4834d4] h-96 justify-center items-center bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="align-center">        
            <div>
              <h1 className="text-gray-100 px-3 text-center text-3xl font-normal leading-relaxed">
                Contact us to discuss how we can partner  <br /> to make digital
                payments simplified for you.
              </h1>
            </div>
          <div className=" text-center mt-8 lg:m-10">
            <ContactbtOutline />
          </div>
        </div>
      </div>
    </section>
  );
};

//  default ContactSec;
