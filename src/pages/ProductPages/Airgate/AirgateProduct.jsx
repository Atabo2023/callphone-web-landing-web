import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import CustTestimonial from "../Componets/CustTestimonial";
import AirgateHero from "./Components/AirgateHero";
import {
  CollectPaySec,
  DocumentationSec,
  EazyAdminSec,
  ReportingSec,
  TrackTransSec,
} from "./Components/AirgateUtilis";
import { AirgatePrefooter } from "./Components/AirgatePrefooter";

const Airgate = () => {
  return (
    <div>
      <Header />
      <AirgateHero />
      <div className="text-2xl text-[#56555584] tracking-wide leading-relaxed w-3/5 p-10">
        <p>
          <span className="text-black">From online </span>stores to social media
          stores and physical stores, our B2B and B2C payment gateway empowers
          your business to thrive. You handle the sales; Airgate handles the
          payment collection.
        </p>
      </div>
      <div className="p-10 m-5 tracking-wide leading-relaxed text-center  text-4xl font-bold ">
        <p>
          Simple, Secure, and Fast Payment Gateway for <br /> Smart Business
          Owners
        </p>
      </div>
      <CollectPaySec />
      <TrackTransSec />
      <ReportingSec />
      <EazyAdminSec />
      <DocumentationSec />
      <CustTestimonial />
      <AirgatePrefooter />
      <Footer />
    </div>
  );
};

export default Airgate;
