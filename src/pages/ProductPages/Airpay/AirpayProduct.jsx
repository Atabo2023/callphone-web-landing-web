import React from "react";
import { Header } from "../../../components/Header/Header";
import HeroPay from "./Components/HeroPay";
import CustTestimonial from "../Componets/CustTestimonial";
import { Footer } from "../../../components/Footer/Footer";
import {
  BillsSec,
  CollectPaymentSec,
  OwnPosSec,
  SemBankingSec,
  WithdrawlSec,
} from "./Components/AirpayUtilis";
import { AirpayPrefooter } from "./Components/PrefooterAirpay";

const AirpayProduct = () => {
  return (
    <div>
      <Header />
      <HeroPay />
      <OwnPosSec />
      <SemBankingSec />
      <CollectPaymentSec />
      <WithdrawlSec />
      <BillsSec />
      <CustTestimonial />
      <AirpayPrefooter />
      <Footer />
    </div>
  );
};

export default AirpayProduct;
