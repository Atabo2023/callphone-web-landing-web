import React from "react";
import image5 from "../../../../assets/images/image5.svg";
import posimg from "../../../../assets/images/SiteImages/pos.jpg";
import { Checkbox } from "antd";
import icon from "../../../../assets/icons/miniIcon/postarget.svg"
import icon2 from "../../../../assets/icons/miniIcon/posgraph.svg"
import icon3 from "../../../../assets/icons/miniIcon/posdoc.svg"
import icon4 from "../../../../assets/icons/miniIcon/poswiggly.svg"

export const OwnPosSec = () => {
  return (
    <>
      <div className="lg:px-28 mt-10">
        <div className="lg:flex">
          {/* <div className="md:py-20 md:pr-10 p-5 md:w-3/5 h-auto w-full">
            <img src={posimg} alt="img" />
          </div> */}
          <div className="grid p-2 gap-5 lg:grid-cols-2 w-full">
            <div className=" p-2 border rounded-lg">
              <img src={icon} alt="icon" className="p-5" />
              <p className="text-xl px-5  pb-2  font-bold">
                Own Your Own POS Terminal
              </p>

              <p className="text-md font-light px-5 text-justify text-[#565555] tracking-normal leading-relaxed">
                Are you a POS Agent? Airvend POS provides all the features you
                need to experience instant and seamless transactions. Own an
                affordable POS terminal today. Reach out right now.
              </p>
            </div>
            <div className=" p-2 border rounded-lg">
              <img src={icon2} alt="icon" className="p-5" />
              <p className="text-xl px-5  pb-2 font-bold">Seamless Banking For all</p>
              <p className="text-md font-light px-5 text-justify text-[#565555] tracking-normal leading-relaxed">
                Payment collection shouldn’t hinder your business's success.
                Collect payments from customers in any way that favors all
                parties. Our POS helps you run a smart business. Reach out now
                to learn how to get one for your business.
              </p>
            </div>
            <div className=" p-2 border rounded-lg">
              <img src={icon3} alt="icon" className="p-5" />
              <p className="text-xl px-5 pb-2  font-bold">Collect Payments</p>
              <p className="text-md font-light px-5 text-justify text-[#565555] tracking-normal leading-relaxed">
                Airvend POS helps you collect customer payments. You don’t need
                to stress about cash payments when you can get an Airvend POS.
                Experience fast settlement and reporting, keep track of your
                transactions, and easily audit your finances anytime.
              </p>
            </div>
            <div className=" p-2 border rounded-lg">
              <img src={icon4} alt="icon" className="p-5" />
              <p className="text-xl px-5  pb-2 font-bold">
                Fast Money Tranfers and Withdrawals
              </p>
              <p className="text-md font-light px-5  text-justify text-[#565555] tracking-normal leading-relaxed">
                Money transfers and withdrawals are faster on Airvend POS. Don’t
                spend minutes waiting for successful transaction notifications
                when you can use Airvend and experience fast and smooth
                transactions.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex p-5 pt-10">
          <div className="pt-10 w-full">
            <p className="md:text-5xl text-3xl font-bold py-5">
              Bills Payment Simplified
            </p>
            <p className="text-xl font-light py-5 text-justify md:w-4/5 text-[#565555] tracking-wide leading-relaxed ">
              Pay bills with the Airvend smart POS running on the Airpay App.
              Our POS terminals make it easy to make online bill payments for
              your customers right from the terminal or app.
            </p>
            <div className="grid gap-4 grid-cols-2 text-[#565555] text-lg  md:pt-10 ">
              <p className="">
                <Checkbox defaultChecked={true} className="custom-checkbox"/> Airtime recharge.
              </p>
              <p className="">
                <Checkbox defaultChecked={true} className="custom-checkbox"/> Cable Tv subscription.
              </p>
              <p className="">
                <Checkbox defaultChecked={true} className="custom-checkbox"/> Data subscription.
              </p>
              <p className="">
                <Checkbox defaultChecked={true} className="custom-checkbox"/> Electricity subscription.
              </p>
            </div>
          </div>
          <div className="lg:px-5 w-full ">
            <img
              src={posimg}
              alt="img"
              className="lg:ml-24 mt-8 md:mx-20 rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
};
