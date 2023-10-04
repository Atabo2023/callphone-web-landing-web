import React, { useEffect, useState } from "react";
import Image from "../../assets/images/image.svg";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductsBtn } from "../../components/Buttons/ProductsBtn";
import usersAvaters from "../../assets/images/avaters.svg";
import { LicenceSection } from "./Licence";
import CarouselPic from "./Carousel";
import { ProductSection } from "./ProductSection/ProductSection";
import { PartnerSec } from "./Partners";
import { ContactSec } from "./ContactSec";
import { Spin } from "antd";

const LandingPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate the page load event
    setTimeout(() => {
      setPageLoaded(true);
    }, 2000);
  }, []);
  return (
    <div>
      <Header />
      <div>
        {pageLoaded ? (
          <div className="opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="bg-[#e5effd] p-5 mt-1 lg:flex md:grid opacity-100 transition-opacity duration-100 ease-in-out">
              <div className="lg:w-2/5">
                <div className="text-6xl font-extrabold mt-20 w-85 p-8 leading-tight">
                  <h2>
                    Digital Payment <br></br>Simplifed For
                  </h2>
                  <h1 className="underline text-[#4834d4]">Everyone.</h1>
                </div>
                <div>
                  <p className="font-normal pl-8 lg:w-full  text-[#565555] tracking-wide leading-relaxed text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur vel incidunt pariatur exercitationem tenetur
                    error sunt.
                  </p>
                </div>
                <div className="pl-8 py-6">
                  <img src={usersAvaters} alt="users" />
                </div>
                <div className="p-10 md:pl-8 md:py-6 ">
                  <ProductsBtn />
                </div>
              </div>

              <div className="lg:w-1/2 pt-10 md:ml-28">
                <CarouselPic />
              </div>
            </div>
            <LicenceSection />
            <ProductSection />
            <PartnerSec />
            <ContactSec />
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
