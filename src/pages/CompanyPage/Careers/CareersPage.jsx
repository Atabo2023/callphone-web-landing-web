import React from "react";
import HeroCareer from "./HeroCareer";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { CardSec } from "./CardSec";
import { Helmet } from "react-helmet";

const CareersPage = () => {
  return (
    <div>
      <Helmet>
        <title>Careers at Callphone</title>
        <meta name="description" content="Join our team at Callphone today." />
      </Helmet>
      <Header />
      <HeroCareer />
      <CardSec />
      <Footer />
    </div>
  );
};

export default CareersPage;
