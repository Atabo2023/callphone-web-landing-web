import React from "react";
import { UserOutlined } from "@ant-design/icons";

const AirpayTestimonial = () => {
  const cards = [
    {
      name: "Bimbo Adekunle",
      username: "@Bimboadekunle",
      description:
        "I started POS business as a side hustle and now it’s my full time means of income. Thanks to Airpay and their favorable operation system. My customers trust my transactions to always work so they always come back.",
    },
    {
      name: "Ebere Okoye",
      username: "@Ebere_Okoye",
      description:
        "I use Airvend POS to collect payment at my business and I’ve not had a reason to get a backup POS. It’s very efficient.",
    },
    {
      name: " Mike Sunday",
      username: "_mikesunday",
      description:
        "With my Airvend POS machine, I make withdrawals for my customers and also use it to pay their bills as a payment agent. I make multiple streams of income just with one machine. I don’t regret being an Airvend agent.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 my-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 lg:ml-5 md:ml-0 ml-8 rounded-lg shadow-lg"
          style={{ width: "300px" }}
        >
          <div className="flex justify-center items-center mb-4">
            <div className="rounded-full  bg-gray-300 p-4">
              <UserOutlined className="text-2xl" />
            </div>
          </div>
          <p className="text-md text-justify mb-4">{card.description}</p>
          <h2 className="text-center text-xl font-semibold mb-2">
            {card.name}
          </h2>
          <h2 className="text-center text-sm text-gray-700">{card.username}</h2>
        </div>
      ))}
    </div>
  );
};

export default AirpayTestimonial;
