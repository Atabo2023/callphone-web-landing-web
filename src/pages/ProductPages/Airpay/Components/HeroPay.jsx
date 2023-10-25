import { Button } from "antd";
import React from "react";
import image4 from "../../../../assets/images/image4.svg";
import bgimage from "../../../../assets/images/BgImages/bgImage2.svg";
import image04 from "../../../../assets/images/SiteImages/pos-removebg.png";
import { Contactbtn } from "../../../../components/Buttons/ContactBtn";

const HeroPay = () => {
  return (
    <>
      <div
        className="bg-[#e5effd] p-5 mt-1 flex lg:flex-row flex-col"
        // style={{
        //   backgroundImage: `url(${bgimage})`,
        //   backgroundRepeat: "repeat-y",
        //   backgroundPosition: "right",
        // }}
      >
        <div className="lg:w-3/5 lg:px-28">
          <div className="lg:text-6xl text-4xl font-bold lg:mt-10 w-full py-5 leading-tight">
            <h2>
              Enjoy Seamless Transactions With{" "}
              <span className=" text-[#4834d4]">Airpay POS</span>
            </h2>
          </div>
          <div>
            <p className="font-normal lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              No cash, no worries. Airpay POS provides cashless, easy, fast, and
              secure payment collection that is comfortable for you and your
              customers - Pay with transfer, POS payment, USSD payment and more.
            </p>
            <p className="font-normal mt-3 lg:w-full text-[#565555] tracking-normal leading-relaxed text-lg">
              POS agent? Airpay POS makes things easy for you, too. Call now to
              get a POS terminal.
            </p>
          </div>
          <div className="py-8 px-3 justify-between flex">
            <Contactbtn />
            {/* <WhatsappOutline/> */}
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-10 w-full">
          <img src={image04} alt="img" className="scale-125" />
        </div>
      </div>
    </>
  );
};

export default HeroPay;
