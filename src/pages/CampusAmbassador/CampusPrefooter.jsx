import React from "react";
import diconsImage from "../../assets/images/dicons.png";

const CampusPrefooter = () => {
    return (
    <>   
     <div className="w-full bg-tinted_grey">
        <div className="flex flex-col justify-center text-start items-center xl:items-start xl:ml-12 xl:w-[662px] gap-8">
        <p className="font-Monserrat font-semibold text-3xl xl:text-4xl text-secondary p-8 xl:pt-12">
          Subscribe to our newsletter to get frequent update
        </p>
        <div className="flex flex-col xl:mb-12 xl:w-[434px] gap-6">
          <button className="border-1 border-off_white rounded-lg py-4 px-16 xl:px-4 bg-tertiary gap-2.5 font-rubik font-normal text-sm text-start items-center text-[#C4C4C4]">
            Enter Email Address
          </button>
          <button className="border-1 border-off_white rounded-lg py-4 px-16 xl:px-10 xl:w-48 bg-dark_purple  hover:bg-indigo-600 font-rubik font-medium text-sm text-center text-tertiary">
            Subscribe
          </button>
        </div>

        <div className="flex xl:absolute xl:left-[48rem] items-center justify-center pb-8">
          <img
         src={diconsImage}
         />
        </div>
      </div>

      <div className="flex absolute left-4 w-[290px] gap-4 bg-white">
        <button className="w-[136px] border-tertiary border-[0.16px] border-solid"></button>
      </div>
      {/* <img
        className="flex items-center justify-center"
        src={dicons}
      /> */}
  </div>
 </>

    )
}

// echo "# callphone-web-landing-web" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Atabo2023/callphone-web-landing-web.git
// git push -u origin main

// https://username:password@github.com/username/repo_name.git

export default CampusPrefooter;