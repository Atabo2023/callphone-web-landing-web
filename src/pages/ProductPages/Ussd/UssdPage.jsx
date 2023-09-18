import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import UssdHero from "./Components/UssdHero";
import UssdPrefooter from "./Components/Ussdprefooter";
import { Ussdbody } from "./Components/Ussdbody";
import { RechargePin } from "./Components/RechargePin";

const UssdPage = () => {
  return (
    <div>
      <Header />
      <UssdHero />
      <Ussdbody/>
      <RechargePin/>
      <UssdPrefooter/>
      <Footer />
    </div>
  );
};

export default UssdPage;
