import React from "react";
import { Header } from "../../../components/Header/Header";
import HeroPay from "./Components/HeroPay";
import CustTestimonial from "../Componets/CustTestimonial";
import { Footer } from "../../../components/Footer/Footer";
import { OwnPosSec } from "./Components/AirpayUtilis";
import { AirpayPrefooter } from "./Components/PrefooterAirpay";
import { Helmet } from "react-helmet";

const AirpayProduct = () => {
  return (
    <div>
      <Helmet>
        <title>Airpay</title>
        <meta
          name="description"
          content="Get a POS terminal. Send and accept transactions with Callphone's POS Terminal."
        />
      </Helmet>
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
