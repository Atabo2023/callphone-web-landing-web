import React from "react";
import image1Image from "../../assets/images/image1.png";
import CampusIcon from "./CampusIcon";
import { Link } from "react-router-dom";
// const scrollToProductSection = () => {
//   const scroller = document.getElementById("scrollProduct");
//   scroller.scrollIntoView({ behavior: "smooth" });

const CampusHero = () => {

    return (
        <>
        <div className="w-full bg-customGradient bg-shadow-lg">
    <CampusIcon />
    <div className="flex flex-col w-full tracking-normal xl:pt-0 pt-16  leading-relaxed text-4xl sm:text-5xl md:text-5xl xl:text-[3.3rem] font-Rubik font-extrabold text-center items-center justify-center gap-2 md:gap-6 xl:gap-6">
        <h1 className="sm:mt-16 md:mt-48 xl:mt-28 text-primary">Become an <span className="text-dark_purple">Airvend</span></h1>
        <h1>Campus Ambassador</h1>
    </div>

  <div className="flex flex-col text-sm tracking-normal leading-relaxed sm:text-lg md:text-sm xl:text-sm font-Rubik opacity-70 text-center justify-center font-normal text-secondary p-[1.2rem]">
    <p> The Airvend Campus Ambassadorship Program is designed to promote
    unique learning opportunities for students passionate about</p>
    <p> financial tech, entrepreneurship, and collaboration that fosters growth. It is highly rewarding for selected students, providing them with a</p>
    <p>platform to build their leadership capabilities and showcase their talents.</p>
  </div>

  <div className="flex justify-center">
        <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSdQauGc5PfCebUh9BmcGJ1lf9gJum6R_lG0UBU1Vyrc1WWm6w/viewform?usp=sf_link"
        target="_blank"
         rel="noopener noreferrer"
         className="rounded-md bg-dark_purple hover:bg-indigo-600 text-white text-sm px-12 border-white py-3">
          Apply Now
        </Link>
  </div>

  <div className="flex justify-center h-96 mt-12">
    <img src={image1Image} alt="HeroImg" />
  </div>
 </div>
        </>
    )
}

export default CampusHero;