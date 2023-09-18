import React from "react";
import HeroCareer from "./HeroCareer";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { CardSec } from "./CardSec";

const CareersPage = () => {
  return (
    <div>
      <Header />
      <HeroCareer />
      <CardSec/>
      <Footer />
    </div>
  );
};

export default CareersPage;
