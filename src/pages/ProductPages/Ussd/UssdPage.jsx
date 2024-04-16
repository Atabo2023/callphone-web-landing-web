import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import UssdHero from "./Components/UssdHero";
import UssdPrefooter from "./Components/Ussdprefooter";
import { Ussdbody } from "./Components/Ussdbody";
import { RechargePin } from "./Components/RechargePin";
import { Helmet } from "react-helmet";

const UssdPage = () => {
  return (
    <div>
      <Helmet>
        <title>USSD</title>
        <meta
          name="description"
          content="No Data to buy data. No problem. buy data using callphone ussd code *174# "
        />
      </Helmet>
      <Header />
      <UssdHero />
      <Ussdbody />
      <RechargePin />
      <UssdPrefooter />
      <Footer />
    </div>
  );
};

export default UssdPage;
