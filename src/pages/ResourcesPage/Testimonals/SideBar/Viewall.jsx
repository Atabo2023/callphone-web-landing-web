import React from "react";
import { UserOutlined } from "@ant-design/icons";
import adaobiImage from "../../../../assets/images/adaobi.svg";
import samsonImage from "../../../../assets/images/samson.svg";
import bolajiImage from "../../../../assets/images/bolaji.svg";
import bimboImage from "../../../../assets/images/bimbo.svg";
import ebereImage from "../../../../assets/images/ebere.svg";
import mikeImage from "../../../../assets/images/mike.svg";

const Viewall = () => {
  const cards = [
    {
      name: "Adaobi Ogechi",
      clientImage: adaobiImage,
      username: "@adaobiOgechi",
      description:
        "I really enjoy the app, I’m finally able to make different types of bills payment from one place. I subscribe my decoder, my light prepaid meter as well as buy airtime and data and I totally love it.",
    },
    {
      name: "Samson George",
      clientImage: samsonImage,
      username: "@samson_George",
      description:
        "As a Techy I particularly enjoy the user interface, it’s simple and very easy to navigate, and it’s a big plus for me that their transactions go through smoothly.",
    },
    {
      name: "Bolaji Daniels",
      clientImage: bolajiImage,
      username: "@bolajiDanials",
      description:
        "I’ve always preferred making transfers and having less cash with me. Since my friend introduced me to Airvend, I’ve been making my mobile cash transfers without any problems.",
    },
    {
      name: "Bimbo Adekunle",
      clientImage: bimboImage,
      username: "@Bimboadekunle",
      description:
        "I started POS business as a side hustle and now it’s my full time means of income. Thanks to Airpay and their favorable operation system. My customers trust my transactions to always work so they always come back.",
    },
    {
      name: "Ebere Okoye",
      clientImage: ebereImage,
      username: "@Ebere_Okoye",
      description:
        "I use Airvend POS to collect payment at my business and I’ve not had a reason to get a backup POS. It’s very efficient.",
    },
    {
      name: "Mike Sunday",
      clientImage: mikeImage,
      username: "_mikesunday",
      description:
        "With my Airvend POS machine, I make withdrawals for my customers and also use it to pay their bills as a payment agent. I make multiple streams of income just with one machine. I don’t regret being an Airvend agent.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
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

export default Viewall;
