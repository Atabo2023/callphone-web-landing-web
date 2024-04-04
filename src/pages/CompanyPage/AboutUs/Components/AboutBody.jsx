import React from "react";
import image9 from "../../../../assets/images/image9.svg";
import image11 from "../../../../assets/images/SiteImages/website_images.jpg";
// import image101 from "../../../../assets/images/SiteImages/newspaper_banner.png";

export const AboutBody = () => {
  return (
    <div className="lg:px-28 px-2">
      {/* <div className="flex mt-20"> */}
      <div className="lg:flex-row  flex flex-col-reverse ">
        <div className="font-normal lg:w-1/2  lg:my-2 py-4 text-[#000000] tracking-wide leading-loose text-lg">
          <p className="text-4xl lg:py-5  font-semibold">About Callphone</p>
          <p className="lg:py-5 lg:pr-10 lg:p-0 p-5 w-full text-justify">
            We are an integrated payment solutions company, driven by innovative
            technology and systems to provide a wide range of value-added
            services to customers. With leading edge technology, an experienced
            and well-equipped service team and world class VAS solutions,
            Callphone Limited are perfectly suited for the market requirements
            and needs. Our technical service team is equipped with the necessary
            skills to support our national footprint and roll-out of all POS
            terminals, training and technical functionality support, providing
            service solutions from the corporate sector to the smallest vendor
            in the informal sector. Callphone Ltd has launched several
            customer-centric products actualizing CBN’s financial inclusion goal
            in line with the National Financial Inclusion Strategy. These
            products are Airvend, Airgate and Airpay.
          </p>
        </div>
        <div className="lg:p-5 lg:w-1/2 w-full p-3 ">
          <img
            src="https://res.cloudinary.com/calllphone/image/upload/v1699914419/website%20Images/unnamed_1_gkgczc.jpg"
            alt="img"
          />
        </div>
      </div>
      {/* </div> */}
      <div className="lg:flex mt-20 lg:mt-0">
        <div className="lg:p-5 mt-20 lg:mx-5 w-full  px-5 ">
          <img src={image11} alt="img" />
        </div>
        <div className=" w-full lg:p-5 p-3 text-justify mt-10">
          <div className="font-normal  py-4 text-[#000000] tracking-wide leading-relaxed text-lg">
            <p className="text-4xl md:py-5 font-semibold">Our Vision</p>
            <p className=" w-full">
              To be the number one financial technology service provider in the
              country, providing unique and scalable technology-driven solutions
              that allow us to respond and adapt to market conditions and
              demands in a short period of time.
            </p>
          </div>
          <div className="font-normal  py-4  text-[#000000] tracking-wide leading-relaxed text-lg">
            <p className="text-4xl md:py-5 font-semibold">Our Mission</p>
            <p className=" w-full">
              To provide top-quality technological services with reliable and
              innovative solutions to enhance client satisfaction and business
              productivity and optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
