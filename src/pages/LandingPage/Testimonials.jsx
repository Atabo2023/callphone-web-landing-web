import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/miniIcon/arrow3.svg";
import { scrollToTop } from "../../utils";
import ebereImage from "../../assets/images/ebere.svg";
import miracleImage from "../../assets/images/miracle.svg";
import adaobiImage from "../../assets/images/adaobi.svg";

export const TestimonialSection = () => {
  const data = [
    {
      review:
        "I use Airvend POS to collect payment at my business. It’s very efficient",
      name: "Ebere Okoye",
      handle: "@Ebere_Okoye",
      clientImage: ebereImage,
    },
    {
      review:
        "When I have limited network, I'm not worried about payments cause my ussd is always available",
      name: "Miracle Andy",
      handle: "@Miracle",
      clientImage: miracleImage,
    },
    {
      review:
        "I really enjoy the app, I’m finally able to make different types of bills payment from one place.",
      name: "Adaobi Ogechi",
      handle: "@adaobiOgechi",
      clientImage: adaobiImage,
    },
  ];

  return (
    <section className="bg-[#F1F7FF]">
      <div className="flex flex-col items-center">
        <p className="text-2xl md:text-5xl font-semibold text-center px-20 pt-20">
          Our Happy <span className="text-[#4834d4]">Clients</span>
        </p>
        <p className="text-base md:text-xl font-light text-center py-5 md:py-10 px-5 md:w-1/2 w-full text-[#565555] tracking-wide leading-relaxed">
          Your's Can Be the Next Success Story
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 md:flex-row md:justify-evenly md:mt-10 md:px-32">
        {data.map((item, i) => (
          <div
            key={i}
            className="w-80 h-80 bg-white border rounded-xl p-8 flex flex-col items-center"
          >
            <div className="flex justify-center rounded-full bg-gray-300 mb-5 h-10 w-10">
              {/* <UserOutlined className="text-2xl" /> */}
              <img src={item.clientImage} />
            </div>

            <p className="text-center mx-auto max-w-sm">{item.review}</p>

            <div className="flex flex-col items-center mt-10">
              <p>{item.name}</p>
              <p className=" text-gray-400">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center md:mt-24 p-10">
        <Link
          className="flex items-center space-x-2"
          to="/testimonials/viewall-Testimonials"
          onClick={scrollToTop}
        >
          <p className="text-[#4834d4] text-base">See more testimonials</p>
          <img
            src={Arrow}
            alt="Airtime and Mobile top up"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </section>
  );
};
