import React from "react";
import { Header } from "../../../components/Header/Header";
import HeroPay from "./Components/HeroPay";
import CustTestimonial from "../Componets/CustTestimonial";
import { Footer } from "../../../components/Footer/Footer";
import { OwnPosSec } from "./Components/AirpayUtilis";
import { AirpayPrefooter } from "./Components/PrefooterAirpay";

const AirpayProduct = () => {
  return (
    <div>
      <Header />
      <HeroPay />
      <div className="p-5">
        <OwnPosSec />
      </div>
      <CustTestimonial />
      <AirpayPrefooter />
      <Footer />
    </div>
  );
};

export default AirpayProduct;
