import React from "react";
import { Divider, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import bolajiImage from "../../../assets/images/bolaji.svg";

const CustTestimonial = () => {
  return (
    <div className="bg-[#e5effd] mt-20 lg:p-20">
      <p className="lg:text-5xl text-3xl font-medium text-center px-20 pt-5 ">
        Customer
        <span className="text-[#4834d4]"> Testimonials</span>{" "}
      </p>
      <p className="font-normal lg:py-10 p-5 w-full text-center text-[#565555] tracking-wide leading-relaxed text-lg">
        "I’ve always preferred making transfers and having less cash with me,
        and because of bank apps failures I have to keep withdrawing multiple
        times a day to make payments. But since my friend introduced me to
        Airvend, I’ve been making my mobile cash transfers without any
        problems."
      </p>
      <div className="flex justify-center divide-x divide-slate-700 p-5">
        <div className="flex p-2">
          <div className="m-3">
            <div className="flex justify-center rounded-full bg-gray-300 mb-5 h-10 w-10">
              {/* <UserOutlined className="text-2xl" /> */}
              <img src={bolajiImage} />
            </div>
          </div>
          <div className="block mt-3 mr-5 text-[#565555]">
            <p className="font-bold">Bolaji Daniels</p>
            <p>@bolaji_Daniels</p>
          </div>
        </div>
        <div>
          <Link to="/testimonials/viewall-Testimonials">
            <button className="text-[#4834d4] ml-5 mt-10">
              View more --{">"}{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustTestimonial;
