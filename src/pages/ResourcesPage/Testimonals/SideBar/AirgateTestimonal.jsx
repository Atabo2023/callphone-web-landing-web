import React from "react";
import { UserOutlined } from "@ant-design/icons";
import miracleImage from "../../../../assets/images/miracle.svg";
import kennethImage from "../../../../assets/images/kenneth.svg";

const AirgateTestimonal = () => {
  const cards = [
    {
      name: "Miracle Andy",
      clientImage: miracleImage,
      username: "@Miracle",
      description:
        "As a small business owner, finding the right payment gateway was crucial for my budget and efficiency. Airgate not only offers competitive rates but also an easy-to-use interface that integrates seamlessly with my website.",
    },
    {
      name: "Kenneth Ayomide",
      clientImage: kennethImage,
      username: "@Ayomide",
      description:
        "Switching to Airgate for handling client payments was a game-changer for my freelance business. The flexibility in payment options and the user-friendly dashboard make it easy for me to manage transactions.",
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

export default AirgateTestimonal;
