import { Button } from "antd";
import React from "react";
import image4 from "../../../../assets/images/image4.svg";
import { Contactbtn, WhatsappOutline } from "../../../../components/Buttons/ContactBtn";

const HeroPay = () => {
  return (
    <>
      <div className="bg-[#e5effd] p-5 mt-1 lg:flex md:grid">
        <div className="lg:w-2/5">
          <div className="text-6xl font-bold mt-20 w-85 p-8 leading-tight">
            <h2>
              Enjoy Seamless Transactions With{" "}
              <span className=" text-[#4834d4]">Airvend POS</span>
            </h2>
          </div>
          <div>
            <p className="font-normal pl-8 lg:w-full text-[#565555] tracking-wide leading-relaxed text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              omnis tempora voluptas iusto corporis aliquid doloremque. Optio
              ipsa, deleniti soluta, quam, maxime expedita iste eligendi maiores
              sed voluptas non accusantium..
            </p>
          </div>
          <div className="p-8 justify-between flex">
            <Contactbtn/>
            {/* <WhatsappOutline/> */}
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={image4} alt="img" />
        </div>
      </div>
    </>
  );
};

export default HeroPay;
