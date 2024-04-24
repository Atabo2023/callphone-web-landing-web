import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Contactbtn = () => {
  return (
    <div>
      <Link to="/contact">
        <button className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white min-w-[200px] py-3 -translate-y-2 px-14 font-medium">
          Contact
        </button>
      </Link>
    </div>
  );
};
export const ContactbtOutline = () => {
  return (
    <div>
      <Link to="/contact">
        <button className="rounded-md bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-16 outline border-white py-3">
          Contact
        </button>
      </Link>
    </div>
  );
};
export const WhatsappOutline = () => {
  return (
    <div>
      <a href="https://wa.me/+2349061163130">
        <button
          className="rounded-md  hover:bg-indigo-700 text-white text-lg px-20 outline border-white py-3"
          icon={<WhatsAppOutlined />}
        >
          <WhatsAppOutlined />
        </button>
      </a>
    </div>
  );
};
