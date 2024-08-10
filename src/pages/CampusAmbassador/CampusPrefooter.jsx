import React from "react";
import diconsImage from "../../assets/images/dicons.png";
import AppStoreImage from "../../assets/images/AppStore.png";
import googleplayImage from "../../assets/images/googleplay.png";
import { Link } from "react-router-dom";

const CampusPrefooter = () => {
  const handleClick = () => {
    window.open('https://apps.apple.com/ng/app/airvend/id1439778926', '_blank');
    window.open('https://play.google.com/store/apps/details?id=com.callphoneng.airvend', '_blank');
  }
    return (
    <>   
     <div className="w-full bg-tinted_grey">
        <div className="flex flex-col justify-center text-start items-center xl:items-start xl:ml-12 xl:w-[662px] gap-8">
        <p className="font-Monserrat font-semibold ml-8 pt-8 lg:m-0 lg:p-0 text-3xl xl:text-4xl text-secondary xl:pt-12">
          Subscribe to our newsletter to get frequent update
        </p>
        <div className="flex flex-col rounded-lg xl:w-[434px] gap-6">

        <input type="text" placeholder="Enter Email Address" 
        
        className="border-1 border-off_white rounded-lg py-4 px-16 xl:px-4 bg-tertiary gap-2.5 font-rubik font-normal text-sm text-start items-center hover:bg-indigo-50 focus:outline-none focus:ring-1 focus:ring-off_white  transition duration-300 ease-in-out" /> 
          </div>

          <div className="flex flex-col xl:mb-8 xl:w-[434px] gap-6">
          <button className="border-1 border-off_white rounded-lg py-4 px-16 xl:px-10 xl:w-48 bg-dark_purple  hover:bg-indigo-600 font-rubik font-medium text-sm text-center text-tertiary">
            Subscribe
          </button>
        </div>

        <div className="flex xl:absolute xl:left-[48rem] items-center justify-center">
          <img
         src={diconsImage}
         className="h-[25rem] xl:mt-12"
         />
        </div>
      </div>

      <div className="flex ml-12 pb-8 gap-4 cursor-pointer">
        <img
         src={googleplayImage}
         alt="clickableImage"
         onClick={handleClick}
         />  
           
        <img
         src={AppStoreImage}
         alt="clickableImage"
         onClick={handleClick}
         />        
      </div>
  </div>
 </>

    )
}

export default CampusPrefooter;