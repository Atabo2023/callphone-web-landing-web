import React from "react";
import { UserOutlined } from "@ant-design/icons";
import bimboImage from "../../../../assets/images/bimbo.svg";

const B2bTestimonials = () => {
  const cards = [
    {
      name: "Bimbo Adekunle",
      clientImage: bimboImage,
      username: "@Bimboadekunle",
      description:
        "I started POS business as a side hustle and now it’s my full time means of income. Thanks to Airpay and their favorable operation system. My customers trust my transactions to always work so they always come back.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 my-8">
      {cards.map((item, i) => (
        <div
          key={i}
          className="w-80 h-96 bg-white border rounded-xl p-8 flex flex-col items-center"
        >
          <div className="flex justify-center rounded-full bg-gray-300 mb-5 h-10 w-10">
            {/* <UserOutlined className="text-2xl" /> */}
            <img src={item.clientImage} />
          </div>

          <div className="h-96">
            <p className="text-center mx-auto max-w-sm">{item.description}</p>
          </div>

          <div className="flex flex-col items-center">
            <p>{item.name}</p>
            <p className=" text-gray-400">{item.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default B2bTestimonials;
