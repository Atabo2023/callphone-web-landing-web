import React from "react";
import image1Image from "../../assets/images/image1.png";
import CampusIcon from "./CampusIcon";

const CampusHero = () => {

    return (
        <>
        <div className="w-full bg-customGradient bg-shadow-lg">
    <CampusIcon />
    <div className="flex flex-col w-full tracking-normal xl:pt-0 pt-16  leading-relaxed text-4xl sm:text-6xl md:text-6xl xl:text-6xl font-Rubik font-extrabold text-center items-center justify-center gap-2 md:gap-6 xl:gap-6">
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
        <button className="rounded-md bg-dark_purple hover:bg-indigo-600 text-white text-lg px-16 outline border-white py-3">
          Apply Now
        </button>
  </div>

  <div className="flex justify-center mt-10">
    <img src={image1Image} alt="HeroImg" />
  </div>
 </div>
        </>
    )
}

export default CampusHero;