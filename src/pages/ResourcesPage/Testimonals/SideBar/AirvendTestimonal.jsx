import React from "react";
import { UserOutlined } from "@ant-design/icons";

const AirvendTestimonal = () => {
  const cards = [
    {
      name: "Adaobi Ogechi",
      username: "@adaobiOgechi",
      description:
        "I really enjoy the app, I’m finally able to make different types of bills payment from one place. I subscribe my decoder, my light prepaid meter as well as buy airtime and data and I totally love it.",
    },
    {
      name: "Samson George",
      username: "@samson_George",
      description:
        "As a Techly I particularly enjoy the user interface, it’s simple and very easy to navigate, and it’s a big plus for me that their transactions go through smoothly.",
    },
    {
      name: "Bolaji Daniels",
      username: "@bolajiDanials",
      description:
        "I’ve always preferred making transfers and having less cash with me, and because of bank apps failures I have to keep withdrawing multiple times a day to make payments. But since my friend introduced me to Airvend, I’ve been making my mobile cash transfers without any problems.",
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

export default AirvendTestimonal;
