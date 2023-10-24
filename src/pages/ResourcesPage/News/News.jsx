import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import bgImage from "../../../assets/images/BgImages/bgImage1.svg";

const News = () => {
  return (
    <div>
      <Header />
      <div
        className="text-white bg-[#4834d4] h-95 justify-center items-center bg-no-repeat z-40 p-10 bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center text-6xl pt-20 tracking-wide leading-relaxed font-bold">
          Coming Soon...
        </h1>
        <p className=" text-center pb-40 pt-5 font-normal tracking-wide leading-relaxed text-md">
        We are preparing something amazing and exciting for our Users. <br />{" "}
          Stay Tuned and Hang on tight!.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default News;
