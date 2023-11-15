import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import AirgateHero from "./Components/AirgateHero";
import { AirgatePrefooter } from "./Components/AirgatePrefooter";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

import CustTestimonial from "../Componets/CustTestimonial";

const Airgate = () => {
  return (
    <div>
      <Header />
      <AirgateHero />
        
      <AirgatePrefooter />
      <Footer />
    </div>
  );
};

export default Airgate;
