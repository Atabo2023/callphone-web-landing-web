import React from "react";
import { Divider, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CustTestimonial = () => {
  return (
    <div className="bg-[#e5effd] mt-20 p-20">
      <p className="text-5xl font-medium text-center px-20 pt-5 ">
        Customer
        <span className="text-[#4834d4]"> Testimonials</span>{" "}
      </p>
      <p className="font-normal py-10 text-center text-[#565555] tracking-wide leading-relaxed text-lg">
        Lorem ipsum, dolor sit amet Numquam labore velit corrupti, ut, <br />{" "}
        rerum totam quas vero soluta aliquam ex Voluptatibus molestias nostrum
        earum doloremqu
      </p>
      <div className="flex justify-center divide-x divide-slate-700 p-5">
        <div className="flex p-2">
          <div className="m-2">
            <Avatar size={64}  />
          </div>
          <div className="block mt-3 mr-5 text-[#565555]">
            <p className="font-bold">Name Surname</p>
            <p>Position, Company Name</p>
          </div>
        </div>
        <div>
          <p className="text-[#4834d4] ml-5 mt-10">View more ---{">"} </p>
        </div>
      </div>
    </div>
  );
};

export default CustTestimonial;
