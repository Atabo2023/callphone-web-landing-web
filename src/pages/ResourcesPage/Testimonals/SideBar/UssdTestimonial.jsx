import React from "react";
import { UserOutlined } from "@ant-design/icons";

const UssdTestimonial = () => {
  const cards = [
    {
      name: "Miracle Andy",
      username: "@Miracle",
      description:
        "When my Phone is dead, I'm not worried about payments cause my ussd is always available",
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

export default UssdTestimonial;
