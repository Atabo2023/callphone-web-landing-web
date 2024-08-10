import React from "react";
import GroupImage from "../../assets/images/Group.png";
import pinImage from "../../assets/images/pin.png";
import image5Image from "../../assets/images/image5.png";
import Rectangle1Image from "../../assets/images/Rectangle1.png";
import Rectangle2Image from "../../assets/images/Rectangle2.png";
import Rectangle3Image from "../../assets/images/Rectangle3.png";
import Rectangle4Image from "../../assets/images/Rectangle4.png";


const CampusRegSec = () => {
    return (
        <>
        <div className="w-full bg-dark_purple my-10 ">
        <div id="Airvend-ambassador" className="flex items-center mx-auto pt-8 justify-center">

          <p className="flex mt-8 font-[montserrat] xl:w-[32rem] justify-center text-[2rem] xl:text-3xl font-semibold text-center leading-10 text-tertiary">
            How to be an Airvend Campus Ambassador.
          </p>
        </div>
          <div className="gap-36 xl:gap-48 xl:ml-32 tracking-normal leading-relaxed px-2">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="flex items-center mt-4">
              <img className="flex" src={pinImage} />
              <p className="flex text-[1rem] md:text-2xl xl:text-2xl text-center items-center font-rubik p-1 text-tertiary">
                Must be a registered student at any university
              </p>
            </div>
            <div className="flex items-center">
              <img className="flex" src={pinImage} />
              <p className="flex text-[1rem] md:text-2xl xl:text-2xl text-start font-rubik ml-1 text-tertiary">
                Must have a leadership skill and ability to influence others
              </p>
            </div>
            <div className="flex items-center">
              <img className="flex" src={pinImage} />
              <p className="flex text-[1rem] md:text-2xl xl:text-2xl text-center font-rubik ml-1 text-tertiary">
                Must have a creative mind and an innovative spirit
              </p>
            </div>
            <div className="flex items-center">
              <img className="flex" src={pinImage} />
              <p className="flex text-[1rem] md:text-2xl xl:text-2xl text-start font-rubik ml-1 text-tertiary">
                Must have and be active on a social media platform
              </p>
            </div>
            <div className="flex items-center">
              <img className="flex" src={pinImage} />
              <p className="flex text-[1rem] md:text-2xl xl:text-2xl text-start font-rubik ml-1 text-tertiary">
                Must be passionate about technology and eager to learn
              </p>
            </div>
            <div className="flex items-center mb-20">
              <img className="flex" src={pinImage} />
              <p className="flex text-[1rem] md:text-2xl xl:text-2xl text-start font-rubik ml-1 text-tertiary">
                Must be committed to representing the brand effectively
              </p>
            </div>
          </div>
          </div>
         
        
        
        <div className=""> 
        <img
          className="rotate-0 pb-10 md:h-[21rem] xl:h-[24.5rem] xl:absolute xl:left-[58rem] relative left-40 md:top-16  lg:top-[172rem]"
          src={image5Image}
        />
        <img
          className="flex absolute top-[295.5rem] md:top-[183.5rem] xl:top-[170.5rem]  right-[17.7rem] md:right-[12.5rem] xl:right-[19rem] rotate-[-4.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-20"
          src={Rectangle4Image}
        />
        <img
          className="flex absolute top-[317.5rem] xl:top-[189rem]  xl:left-[53rem] left-[5.4rem] rotate-[-1.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-20"
          src={Rectangle1Image}
        />
        <img
          className="flex absolute top-[302.5rem] right-[2.8rem] md:right-[0.5rem] xl:right-[6rem] md:top-[177.5rem] lg:top-[188.5rem] xl:top-[175.5rem] rotate-[1.74deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-20"
          src={Rectangle3Image}
        />
        <img
          className="absolute top-[318rem] right-36 md:top-[203rem] xl:top-[190rem] md:right-[4.5rem] lg:right-[4.5rem] xl:right-[11.5rem] rotate-[-3.26deg]  drop-shadow-[4px 4px 15px 0px #BDBDEA40] items-end h-[3.9rem]"
          src={Rectangle2Image}
       />
       
       </div> 
       </div>
        </>
    )
}

export default CampusRegSec;