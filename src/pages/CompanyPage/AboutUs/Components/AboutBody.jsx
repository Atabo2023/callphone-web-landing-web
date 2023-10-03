import React from "react";
import image9 from "../../../../assets/images/image9.svg";
import image10 from "../../../../assets/images/image10.svg";

export const AboutBody = () => {
  return (
    <div>
      <div className="flex mt-20">
        <div className=" w-full">
          <div className="font-normal mx-10 my-20  py-4 pl-8 text-[#000000] tracking-wide leading-loose text-lg">
            <p className="text-4xl p-5 font-semibold">About Callphone</p>
            <p className="p-5 w-full">
              We are an integrated payment solutions company, driven by
              innovative technology and systems to provide a wide range of
              value-added services to customers. With leading edge technology,
              an experienced and well-equipped service team and world class VAS
              solutions, Callphone Limited are perfectly suited for the market
              requirements and needs. Our technical service team is equipped
              with the necessary skills to support our national footprint and
              roll-out of all POS terminals, training and technical
              functionality support, providing service solutions from the
              corporate sector to the smallest vendor in the informal sector.
              Callphone Ltd has launched several customer-centric products
              actualizing CBN’s financial inclusion goal in line with the
              National Financial Inclusion Strategy. These products are Airvend,
              Airgate and Airpay.
            </p>
          </div>
        </div>
        <div className="p-5 w-full">
          <img src={image9} alt="img" />
        </div>
      </div>
      <div className="flex mt-20">
        <div className="p-5 w-full">
          <img src={image10} alt="img" />
        </div>
        <div className=" w-full p-5 ">
          <div className="font-normal mx-10 py-4 pl-8 text-[#000000] tracking-wide leading-relaxed text-lg">
            <p className="text-4xl p-5 font-semibold">Our Vision</p>
            <p className=" w-full">
              We are an integrated payment solutions company, driven by
              innovative technology and systems to provide a wide range of
              value-added services to customers. With leading edge technology,
              an experienced and well-equipped service team and world class VAS
              solutions, Callphone Limited are perfectly suited for the market
              requirements and needs. 
            </p>
          </div>
          <div className="font-normal mx-10  py-4 pl-8 text-[#000000] tracking-wide leading-relaxed text-lg">
            <p className="text-4xl p-5 font-semibold">Our Mission</p>
            <p className=" w-full">
            Our technical service team is equipped
              with the necessary skills to support our national footprint and
              roll-out of all POS terminals, training and technical
              functionality support, providing service solutions from the
              corporate sector to the smallest vendor in the informal sector.
              Callphone Ltd has launched several customer-centric products
              actualizing CBN’s financial inclusion goal in line with the
              National Financial Inclusion Strategy. These products are Airvend,
              Airgate and Airpay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
