import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import Hero from "./components/Hero";
import {
  AirtimeSec,
  CableSubSec,
  ElectricBillsSec,
  TransferSec,
} from "./components/AirvendUtilis";
import Vendcards from "./components/Cards";
import Prefooter from "./components/Prefooter";
import CustTestimonial from "../Componets/CustTestimonial";

const Airvend = () => {
  return (
    <>
      <Header />
      <Hero />
      <TransferSec />
      <AirtimeSec />
      <CableSubSec />
      <ElectricBillsSec />
      <div>
        <p className="text-5xl font-medium text-center px-20 pt-5 leading-tight ">
          Instant Wallet Funding; <br /> Diverse{" "}
          <span className="text-[#4834d4]">Options</span>{" "}
        </p>
        <p className="font-normal py-10 text-center text-[#565555] tracking-wide leading-relaxed text-lg">
          Lorem ipsum, dolor sit amet Numquam labore velit corrupti, ut, <br />{" "}
          rerum totam quas vero soluta aliquam ex Voluptatibus molestias nostrum
          earum doloremqu
        </p>
      </div>
      <Vendcards />
      <CustTestimonial />
      <Prefooter />
      <Footer />
    </>
  );
};

export default Airvend;
