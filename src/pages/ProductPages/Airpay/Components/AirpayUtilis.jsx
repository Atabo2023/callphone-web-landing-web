import React from "react";
import image5 from "../../../../assets/images/image5.svg";
import { Checkbox } from "antd";

export const OwnPosSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="md:w-1/2 pt-20 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Own Your Own POS Terminal
          </p>

          <p className="text-lg font-light px-16 py-10 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed ">
            Are you a POS Agent? Airvend POS provides all the features you need
            to experience instant and seamless transactions. Own an affordable
            POS terminal today. Reach out right now.
          </p>
        </div>
        <div className="box-border pt-20 pr-20 m-5 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image5} alt="icon" />
        </div>
      </div>
    </>
  );
};

export const SemBankingSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="box-border pl-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image5} alt="icon" />
        </div>
        <div className="md:w-1/2 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20 ">
            Seamless Banking For all
          </p>
          <p className="text-lg font-light px-16 py-10 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Payment collection shouldn’t hinder your business's success. Collect
            payments from customers in any way that favors all parties. Our POS
            helps you run a smart business. Reach out now to learn how to get
            one for your business.
          </p>
          <div className="px-16"></div>
        </div>
      </div>
    </>
  );
};
export const CollectPaymentSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="md:w-1/2 mt-20 ">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Collect Payments
          </p>
          <p className="text-lg font-light px-16 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Airvend POS helps you collect customer payments. You don’t need to
            stress about cash payments when you can get an Airvend POS.
            Experience fast settlement and reporting, keep track of your
            transactions, and easily audit your finances anytime.
          </p>
        </div>
        <div className="box-border pr-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image5} alt="icon" />
        </div>
      </div>
    </>
  );
};
export const WithdrawlSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="box-border pl-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image5} alt="icon" />
        </div>
        <div className="md:w-1/2 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Fast Money Tranfers and Withdrawals
          </p>
          <p className="text-lg font-light px-16 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Money transfers and withdrawals are faster on Airvend POS. Don’t
            spend minutes waiting for successful transaction notifications when
            you can use Airvend and experience fast and smooth transactions.
          </p>
          {/* <div className="px-16"></div> */}
        </div>
      </div>
    </>
  );
};
export const BillsSec = () => {
  return (
    <>
      <div className="md:flex p-5">
        <div className="md:w-1/2 mt-20">
          <p className="text-5xl font-medium px-16 pb-5 mt-20">
            Bills Payment Simplified
          </p>
          <p className="text-lg font-light px-16 text-justify md:w-4/5 w-full text-[#565555] tracking-wide leading-relaxed">
            Pay bills with the Airvend smart POS running on the Airpay App. Our
            POS terminals make it easy to make online bill payments for your
            customers right from the terminal or app. ● Airtime recharge ● Data
            subscription ● Cable Tv subscription ● Electricity subscription ●
            and many more.
          </p>
          <div className="grid grid-cols-2 text-[#565555] text-lg px-16 py-5 mr-10">
            <p className="p-2">
              <Checkbox /> Lorem, ipsum dolor.
            </p>
            <p className="p-2">
              <Checkbox /> Lorem, ipsum dolor.
            </p>
            <p className="p-2">
              <Checkbox /> Lorem, ipsum dolor.
            </p>
            <p className="p-2">
              <Checkbox /> Lorem, ipsum dolor.
            </p>
            <p className="p-2">
              <Checkbox /> Lorem, ipsum dolor.
            </p>
            <p className="p-2">
              <Checkbox /> Lorem, ipsum dolor.
            </p>
          </div>
        </div>
        <div className="box-border pl-20 h-5/6 border border-transparent rounded-3xl  md:w-1/2">
          <img src={image5} alt="icon" />
        </div>
      </div>
    </>
  );
};
