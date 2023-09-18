import React from "react";
import Arrow from "../../../../assets/icons/miniIcon/arrow.svg";
import image3 from "../../../../assets/images/image3.svg";

export const TransferSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="md:w-1/2 pt-20 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Send, Request and Receive Money
          </p>

          <p className="text-lg font-light px-16 py-10 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, velit
            numquam! Ullam molestias praesentium ratione et ex. Voluptatibus
            odit suscipit quis dicta sint libero, nesciunt tenetur tempore ea
            alias distinctio?
          </p>
        </div>
        <div className="box-border pt-20 pr-20 m-5 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image3} alt="icon" />
        </div>
      </div>
    </>
  );
};

export const AirtimeSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="box-border pl-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image3} alt="icon" />
        </div>
        <div className="md:w-1/2 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20 ">
            Airtime Recharge and Data Subscription
          </p>
          <p className="text-lg font-light px-16 py-10 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            eos id facilis assumenda omnis vitae distinctio, laborum cum culpa
            iure sunt corrupti fugiat quisquam, aliquid voluptates nesciunt
            consequuntur iusto minus.
          </p>
          <div className="px-16"></div>
        </div>
      </div>
    </>
  );
};
export const CableSubSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="md:w-1/2 mt-20 ">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Cable TV Subscription
          </p>
          <p className="text-lg font-light px-16 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, velit
            numquam! Ullam molestias praesentium ratione et ex. Voluptatibus
            odit suscipit quis dicta sint libero, nesciunt tenetur tempore ea
            alias distinctio?
          </p>
        </div>
        <div className="box-border pr-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image3} alt="icon" />
        </div>
      </div>
    </>
  );
};
export const ElectricBillsSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="box-border pl-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image3} alt="icon" />
        </div>
        <div className="md:w-1/2 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Electricity Bills Payment
          </p>
          <p className="text-lg font-light px-16 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            eos id facilis assumenda omnis vitae distinctio, laborum cum culpa
            iure sunt corrupti fugiat quisquam, aliquid voluptates nesciunt
            consequuntur iusto minus.
          </p>
          {/* <div className="px-16"></div> */}
        </div>
      </div>
    </>
  );
};
