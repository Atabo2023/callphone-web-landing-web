import React from "react";
import image02 from "../../../../assets/images/SiteImages/responsive_device_64.png";
import { StoreDownload } from "../../../../components/Downloads/StoreDownload";
import { SignUpbtn } from "../../../../components/Buttons/RegisterBtn";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="bg-[#e5effd] lg:p-5 mt-1 lg:flex grid p-2"
      >
        <div className="lg:w-1/2 lg:px-24 px-2">
          <div className="lg:text-6xl text-4xl font-bold lg:mt-20 w-full p-8">
            <h2>
              One <span className=" text-[#4834d4]">App</span> For All Bills
            </h2>
          </div>
          <div>
            <p className="font-normal lg:pl-8 p-5 lg:w-full text-[#565555] text-justify tracking-normal leading-relaxed text-lg">
              Spending your hard-earned money shouldn’t be stressful. Enjoy 100%
              cashless, fast and affordable transactions. One secure solution
              for all your online bill payments. You don’t need 1000 apps to pay
              your bills.
            </p>
          </div>
          <div className="p-6 md:p-10  justify-between">
            <StoreDownload />
          </div>
          <div>
            <SignUpbtn />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src={image02} alt="img" />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
