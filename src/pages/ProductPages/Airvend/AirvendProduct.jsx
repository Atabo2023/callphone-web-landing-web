import React from "react";
import { motion } from "framer-motion";
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
      <div className="lg:px-24 p-5">
        <TransferSec />
        <AirtimeSec />
        <CableSubSec />
        <ElectricBillsSec />
        <div>
          <p className="lg:text-5xl text-4xl font-medium text-center lg:px-20 mt-10 leading-tight ">
            Instant Wallet Funding; <br /> Diverse{" "}
            <span className="text-[#4834d4]">Options</span>{" "}
          </p>
          <p className="font-normal py-10 text-center text-[#565555] tracking-wide leading-relaxed text-lg">
            Ensures a convenient and accessible means for users to fund their
            wallets instantly,  <br></br> by providing diverse options for quickly
            replenishing their digital wallets.  <br></br> Whether through bank
            transfers, debit cards or via your airvend Wallet.
          </p>
        </div>
      </div>
      <Vendcards />
      <CustTestimonial />
      <div className="my-5">
        <Prefooter />
      </div>
      <Footer />
    </>
  );
};

export default Airvend;
