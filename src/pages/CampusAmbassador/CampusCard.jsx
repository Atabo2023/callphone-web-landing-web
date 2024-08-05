import React from "react";
import circleImage from "../../assets/images/circle.png";
import image3Image from "../../assets/images/image3.png";
import CampusCardIcon from "./CampusCardIcon";

const CampusCards = () => {

    return (
        <>
        <CampusCardIcon />
<div className="w-full flex bg-white mb-10">
        <div className="flex gap-24">
          <img src={circleImage} alt="ovalImg" />
     
          <img className="absolute top-[74rem] left-36" src={image3Image} alt="cardImg" />


    <div className="flex flex-col justify-end mb-20">
          {/* <div className="flex items-start flex-col justify-center"> */} 
            {/* {/* <div className="flex w-[678px] h-[244px] p-[10px] gap-[10px]"> */}
            <h1 className="text-7xl md:text-[3.5rem] lg:text-[3.5rem] xl:text-7xl leading-[1.3] mb-4 font-bold text-dark_purple">
              Lead, Collaborate, <span className="text-dark_blue">and</span> Inspire
            </h1>
            <p className="text-primary text-xl text-start items-start justify-start gap-6">
              Join our campus ambassador program and become a catalyst for
              change. Take the lead and make a difference today
            </p>
            </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-10"> */}
            <div className="flex flex-col items-end justify-left relative bottom-[5rem] right-[27rem] md:right-[20.5rem]">
            <button className="flex border-1 font-md leading-5 text-center rounded-lg py-4 px-16 border-dark_grey hover:bg-indigo-600 bg-dark_purple text-tertiary justify-left items-left">
              Apply Now
            </button>
            <button className="flex rounded-lg border-solid border-1 border-light_grey py-4 px-10 drop-shadow-md bg-tertiary hover:bg-indigo-50 text-dark_purple absolute right-[-13rem] bottom-[0rem]">
              Learn More
            </button>
          {/* </div> */}
          {/* </div> */}
        {/* </div> */}
       
</div>
        </>
    )
}

export default CampusCards;