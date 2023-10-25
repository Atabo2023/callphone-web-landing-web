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
      <div>
        <div className="lg:p-20">
          <p className="lg:text-5xl text-3xl font-medium text-center px-20 pt-5 ">
            Customer
            <span className="text-[#4834d4]"> Testimonials</span>{" "}
          </p>
          <p className="font-normal lg:py-10 p-5 text-center text-[#565555] tracking-wide leading-relaxed text-lg">
            Lorem ipsum, dolor sit amet Numquam labore velit corrupti, ut,{" "}
            <br /> rerum totam quas vero soluta aliquam ex Voluptatibus
            molestias nostrum earum doloremqu
          </p>
          <div className="flex justify-center divide-x divide-slate-700 p-5">
            <div className="flex p-2">
              <div className="m-2">
                <Avatar size={64} />
              </div>
              <div className="block mt-3 mr-5 text-[#565555]">
                <p className="font-bold">Name Surname</p>
                <p>Position, Company Name</p>
              </div>
            </div>
            <div>
              <Link to="/testimonials/viewall-Testimonials">
                <button className="text-[#4834d4] ml-5 mt-10">
                  View more ---{">"}{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AirgatePrefooter />
      <Footer />
    </div>
  );
};

export default Airgate;
