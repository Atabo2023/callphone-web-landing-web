import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import Images from "./GalleryImages";

const GalleryPage = () => {
  return (
    <div>
      <Header />
      <div className="text-center m-5 p-5">
        <h1 className="text-center text-6xl tracking-wide leading-relaxed  font-medum">
          Image <span className="text-[#4834d4]">Gallery</span>
        </h1>
        <p className=" text-center font-normal  text-[#565555] tracking-wide leading-relaxed text-md">
          Lorem ipsum, dolor sit amet consectetur
        </p>
      </div>
      <div className="lg:m-10 p-5">
        <Images />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
