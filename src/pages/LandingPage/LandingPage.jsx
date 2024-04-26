import React from "react";
import Image from "../../assets/images/hero_image.webp";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { LicenceSection } from "./Licence";
import { ProductSection } from "./ProductSection/ProductSection";
import { TestimonialSection } from "./Testimonials";
import { PartnerSec } from "./Partners";
import { ContactSec } from "./ContactSec";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const scrollToProductSection = () => {
    const scroller = document.getElementById("scrollProduct");
    scroller.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <div>
        <div className="opacity-100  transition-opacity duration-300 ease-in-out">
          <div className="bg-[#e5effd]">
            <div className="md:px-24 p-5 mt-1 flex md:flex-row flex-col opacity-100 transition-opacity duration-100 ease-in-out">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1 }}
                className="lg:w-1/2 "
              >
                <div className="lg:text-6xl lg:text-left text-center text-4xl font-extrabold lg:mt-14 w-85 md:p-8 p-3 ">
                  <h2 className="leading-tight">
                    Digital Payments <br></br>Simplified For
                  </h2>
                  <h1 className="underline leading-tight  text-[#4834d4] font-bold">
                    Everyone.
                  </h1>
                </div>
                <div className="flex flex-col items-center md:items-start md:pl-8">
                  <div>
                    <p className="font-normal text-center md:text-justify p-5 md:p-0 text-[#565555] tracking-normal leading-relaxed text-lg">
                      Secure and seamless transactions at all times. Enjoy 100%
                      availability and efficiency on the Airvend Mobile app,
                      Airgate Payment Gateway, *174# USSD code, and all POS
                      terminals.
                    </p>
                  </div>

                  <div className="mt-10">
                    <Link className="" to="/">
                      <button
                        className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white min-w-[200px] py-3 px-14 font-medium"
                        onClick={scrollToProductSection}
                      >
                        Products
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="hidden md:block md:mt-20 ml-7">
                  <LicenceSection />
                </div>
              </motion.div>
              <motion.div
                animate
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2 }}
                className=" lg:p-2 lg:h-0 h-4/5"
              >
                <div className="md:mt-12 md:ml-5">
                  <img fetchpriority="high" src={Image} alt="header image" />
                </div>
              </motion.div>
            </div>
          </div>
          <ProductSection />
          <TestimonialSection />
          <PartnerSec />
          <ContactSec />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
