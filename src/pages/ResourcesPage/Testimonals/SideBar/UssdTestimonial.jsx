import React from "react";
import { UserOutlined } from "@ant-design/icons";
import miracleImage from "../../../../assets/images/miracle.svg";

const UssdTestimonial = () => {
  const cards = [
    {
      name: "Miracle Andy",
      clientImage: miracleImage,
      username: "@Miracle",
      description:
        "When my Phone is dead, I'm not worried about payments cause my ussd is always available",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 my-8">
      {cards.map((item, i) => (
        <div
          key={i}
          className="w-80 h-80 bg-white border rounded-xl p-8 flex flex-col items-center"
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

export default UssdTestimonial;
