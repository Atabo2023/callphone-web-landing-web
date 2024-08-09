import React from "react";
import circleImage from "../../assets/images/circle.png";
import image3Image from "../../assets/images/image3.png";
import CampusCardIcon from "./CampusCardIcon";
import { Link } from "react-router-dom";

const CampusCards = () => {

    return (
        <>
        <CampusCardIcon />
<div className="w-full flex bg-white mb-8">
        <div className=" md:flex md:gap-24 xl:flex xl:gap-24">
          <img src={circleImage} alt="ovalImg" />
     
          <img className="absolute top-[64rem] left-12 md:top-[74rem] md:left-36 xl:top-[68rem] xl:left-36" src={image3Image} alt="cardImg" />


    <div className="flex flex-col justify-end md:mb-20 xl:mb-20 pt-24">
          {/* <div className="flex items-start flex-col justify-center"> */} 
            {/* {/* <div className="flex w-[678px] h-[244px] p-[10px] gap-[10px]"> */}
            <h1 className="text-5xl py-8 px-4 sm:py-8 sm:px-4 md:text-[3.5rem] lg:text-[3.5rem] xl:text-7xl font-bold text-dark_purple">
              Lead, Collaborate, <span className="text-dark_blue">and</span> Inspire
            </h1>
            <p className="text-primary tracking-normal xl:text-xl text-start xl:text-start px-4 gap-6">
              Join our campus ambassador program and become a catalyst for
              change. Take the lead and make a difference today
            </p>
            </div>
            </div>
</div>

          

  <div className="flex flex-col gap-10">
    <div className="flex flex-col lg:flex-row xl:flex justify-center items-center gap-8 xl:justify-content-end xl:absolute xl:right-44 xl:top-[97rem] xl:gap-10 border-dark_grey">
    <Link
        to="https://docs.google.com/forms/d/1DSkeXuB21nylN1XdjhRsHBwD8KEjUM9RO6u4oVPQlHc/edit"
        target="_blank"
        rel="noopener noreferrer"
        className="xl:left-[40rem] xl:top-[94rem] text-lg rounded-md bg-dark_purple hover:bg-indigo-600 text-tertiary px-16 py-3 xl:border-1 font-md"
       
      >
       Apply Now
      </Link>
      <button 
        className="xl:left-[40rem] xl:top-[94rem] text-lg rounded-lg bg-tertiary drop-shadow-md hover:bg-indigo-50 text-dark_purple border-solid border-1 border-light_grey  px-12 py-4" 
      > 
          Learn More
       </button> 
       </div> 
         {/* </div>  */}
        {/* </div>  */}
       
</div> 
        </>
    )
}

export default CampusCards;