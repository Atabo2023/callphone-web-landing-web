import React from "react";
import sendMoney from "../../../../assets/images/SiteImages/send_money.svg";
import airtime from "../../../../assets/images/SiteImages/airtime.svg";
import cableTV from "../../../../assets/images/SiteImages/cable_tv.svg";
import power from "../../../../assets/images/SiteImages/power.svg";

export const TransferSec = () => {
  return (
    <>
      <div className="md:flex  lg:p-5 w-full">
        <div className="lg:w-1/2 mt-10 ">
          <p className="lg:text-5xl text-4xl font-medium lg:px-5 leading-relaxed pl-8 py-5 mt-10 lg:mt-5">
            Send, Request and Receive Money
          </p>
          <p className="text-xl font-light md:pl-4 lg:py-3 px-2 lg:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Easily send and receive money directly with your Airvend account.
            It’s fast, easy, and secure digital payment. Don’t waste your money
            on transaction charges when you can transact at almost zero charges.
          </p>
        </div>
        {/* <div className="box-border h-5/6 bg-[#E3E3E3] border border-transparent rounded-3xl md:px-20 w-full lg:w-1/2 my-10"> */}
        <div className="box-border h-5/6 border border-transparent md:px-20 w-full md:w-1/2 my-10">
          <img className="rounded-3xl" src={sendMoney} alt="money transfer" />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export const AirtimeSec = () => {
  return (
    <>
      <div className="flex md:p-5 md:flex-row md:justify-between flex-col-reverse w-full">
        {/* <div className="box-border h-5/6 border border-transparent rounded-3xl md:px-20 w-full bg-[#E3E3E3] lg:w-1/2 my-10"> */}
        <div className="box-border h-5/6 border border-transparent md:px-20 w-full md:w-1/2 my-10">
          <img className="rounded-3xl" src={airtime} alt="icon" />
        </div>
        {/* </div> */}
        <div className="md:w-1/2 ">
          <p className="lg:text-5xl text-4xl font-medium lg:px-8 mt-10 pl-8 py-5">
            Airtime Recharge and Data Subscription
          </p>
          <p className="text-xl font-light md:pl-4 lg:py-3 text-justify lg:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Top up your airtime and/or internet data from anywhere via various
            Airvend channels – website, mobile app, or *174# shortcode. Recharge
            or buy data for yourself or your friends, family, colleagues, or
            employees. Bulk recharge and data gifting are available.
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
      <div className="md:flex md:justify-between lg:p-5">
        <div className="lg:w-1/2 mt-10 ">
          <p className="lg:text-5xl text-4xl font-medium lg:px-4 leading-relaxed pl-8 py-5 mt-10 lg:mt-5">
            Cable TV Subscription
          </p>
          <p className="text-xl font-light md:pl-4 lg:py-3 px-2 text-justify lg:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Relax and enjoy non-stop access when you renew your cable TV
            subscription with Airvend. DSTV, GOTV, Startimes, and more, choose
            from a wide range of bouquets and make your seamless online TV
            subscription payment on Airvend. We help you stay connected to a
            world of limitless entertainment.
          </p>
        </div>
        {/* <div className="box-border bg-[#E3E3E3] h-5/6 border border-transparent rounded-3xl md:px-20 w-full lg:w-1/2 my-10"> */}
        <div className="box-border h-5/6 border border-transparent md:px-20 w-full md:w-1/2 my-10">
          <img className="rounded-3xl" src={cableTV} alt="icon" />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export const ElectricBillsSec = () => {
  return (
    <>
      <div className="flex lg:p-5 lg:flex-row flex-col-reverse">
        {/* <div className="box-border bg-[#E3E3E3]  border border-transparent rounded-3xl md:px-20 w-full lg:w-1/2 my-10"> */}
        <div className="box-border h-5/6 border border-transparent md:px-20 w-full md:w-1/2 my-10">
          <img className="rounded-3xl" src={power} alt="icon" />
        </div>
        {/* </div> */}
        <div className="lg:w-1/2">
          <p className="lg:text-5xl text-4xl font-medium lg:px-9 mt-10 pl-8 py-5">
            Electricity Bills Payment
          </p>
          <p className="text-xl font-light md:pl-10 lg:py-3 text-justify  w-full text-[#565555] tracking-wide leading-relaxed">
            Experience zero power outages when you renew your prepaid and
            postpaid electricity payments with Airvend. Our electricity
            value-added services cover every power distribution center in
            Nigeria and are structured to give you fast prepaid meter tokens to
            continue enjoying 100% power supply. It only takes 30 seconds.
          </p>
          {/* <div className="px-16"></div> */}
        </div>
      </div>
    </>
  );
};
