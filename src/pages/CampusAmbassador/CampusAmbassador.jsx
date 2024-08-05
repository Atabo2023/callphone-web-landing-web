import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import CampusHero from "./CampusHero";
import CampusCards from "./CampusCard";
import CampusGridLayout from "./CampusGridLayout";
import CampusRegSec from "./CampusRegSec";
import CampusFaqs from "./CampusFaqs";
import CampusPrefooter from "./CampusPrefooter";

const CampusAmbassador = () => {

    return (
        <>
        <Header/>
        <div className="my-10">
            <CampusHero />
            <CampusCards />
            <CampusGridLayout />
            <CampusRegSec />
            <CampusFaqs />
            <CampusPrefooter />


        {/* add components here */}
        {/* <h1>CAMPUSAMBASSADOR</h1> */}



        </div>
        <Footer/>

        </>
    )
}

export default CampusAmbassador;