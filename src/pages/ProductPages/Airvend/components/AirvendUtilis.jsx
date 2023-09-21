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
            Easily send and receive money directly with your Airvend account.
            It’s fast, easy, and secure digital payment. Don’t waste your money
            on transaction charges when you can transact at almost zero charges.
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
      <div className="md:flex p-5">
        <div className="md:w-1/2 mt-20 ">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Cable TV Subscription
          </p>
          <p className="text-lg font-light px-16 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Relax and enjoy non-stop access when you renew your cable TV
            subscription with Airvend. DSTV, GOTV, Startimes, and more, choose
            from a wide range of bouquets and make your seamless online TV
            subscription payment on Airvend. We help you stay connected to a
            world of limitless entertainment.
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
