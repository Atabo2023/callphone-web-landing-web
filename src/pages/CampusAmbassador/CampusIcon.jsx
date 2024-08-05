import React from "react";
import noteImage from "../../assets/images/note.png";
import Ellipse1Image from "../../assets/images/Ellipse1.png";
import Ellipse2Image from "../../assets/images/Ellipse2.png";
import glassImage from "../../assets/images/glass.png";
import image2Image from "../../assets/images/image2.png";
const CampusIcon = () => {
    
    return (
        <>
<div>
        <div className="flex absolute left-[69rem] md:left-[64rem] lg:left-[64rem] xl:left-[69rem] justify-end">
    <img src={Ellipse1Image} alt="ellipseIcon" />
  </div>
        <div className="absolute max-w-[3rem]">
    <img className="max-w-full h-auto object-cover" src={Ellipse2Image} alt="ellipseIcon" />
  </div>
         <div className="flex absolute top-52 right-52 md:right-36 lg:right-48 opacity-65 rotate-[4.50deg]">
    <img src={noteImage} alt="noteIcon" />
  </div>
        <div className="absolute top-[37rem] opacity-[80%] left-4 md:left-[-2rem] lg:left-4">
    <img src={glassImage} alt="glassIcon" />
  </div> 
        <div className="justify-end absolute top-[30rem] right-[4rem]">
    <img src={image2Image} alt="imageIcon" />
  </div> 

        {/* <div className="flex justify-center mt-1">
    <img src={glassImage} alt="glassIcon" />
  </div> */} 
</div>
        </>
    )
}
export default CampusIcon;