import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import AirgateHero from "./Components/AirgateHero";
import { AirgatePrefooter } from "./Components/AirgatePrefooter";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { Helmet } from "react-helmet";

import CustTestimonial from "../Componets/CustTestimonial";

const Airgate = () => {
  return (
    <div>
      <Helmet>
        <title>Airgate</title>
        <meta
          name="description"
          content="Discover a hassle-free way to process payments today.Accept payments from anyone quickly and seamlessly on Callphone. Get started with Airgate."
        />
      </Helmet>
      <Header />
      <AirgateHero />

      <AirgatePrefooter />
      <Footer />
    </div>
  );
};

export default Airgate;
