import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card, Row, Space } from "antd";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import bgimage from "../../assets/images/BgImages/bgImage2.svg";

const Contact = () => {
  
  return (
    <div>
      <Header />
      <div className="px-18">
        <div
          className="text-center m-5 p-5 bg-cover bg-right"
          // style={{ backgroundImage: `url(${bgimage})` }}
        >
          <h1 className="text-6xl font-semibold tracking-wide leading-relaxed font-medum p-5">
            Contact <span className="text-[#4834d4]">Us</span>
          </h1>
          <p className="text-[#565555] text-center font-normal tracking-wide leading-relaxed text-md">
            Contact Callphone Limited right now; <br /> let us know how we can
            work together. Available 24/7.
          </p>
        </div>
        <div className="lg:m-20 m-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-1 m-2">
              <div className="custom-cards rounded-3xl">
                <div className="w-full p-4">
                  <p className="text-3xl font-extrabold justify-left">
                    <i>
                      {" "}
                      <MailOutlined />
                    </i>
                  </p>
                  <p className="text-xl font-medium py-5">Email</p>
                  <h5>support@airvend.ng</h5>
                  <a href="mailto:support@callphone.ng">
                    <button className="rounded-full bg-black text-white py-2 px-10 my-5">
                      CONTACT
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 m-2">
              <div className="custom-cards rounded-3xl">
                <div className="w-full p-4">
                  <p className="text-3xl font-extrabold justify-left">
                    <i>
                      <PhoneOutlined />
                    </i>
                  </p>
                  <p className="text-xl font-medium py-5">Phone</p>
                  <h5>
                    Office. <u>+234 906 116 3130</u>
                  </h5>
                  <a href="tel:+23456789100000">
                    <button className="rounded-full bg-black text-white py-2 px-10 my-5">
                      CALL
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:p-1 m-2">
              <div className="custom-cards rounded-3xl">
                <div className="w-full p-4">
                  <p className="text-3xl px-4 font-extrabold justify-left">
                    <i>
                      <EnvironmentOutlined />
                    </i>
                  </p>
                  <p className="text-xl font-medium px-4 py-5">Office</p>
                  <div className="flex justify-around ">
                    <p>
                   
                      <i>
                        <EnvironmentOutlined />
                      </i>{" "}
                      Abuja
                    </p>
                    <p>
                      {" "}
                      <i>
                        <EnvironmentOutlined />
                      </i>{" "}
                      Lagos
                    </p>
                    <p>
                      {" "}
                      <i>
                        <EnvironmentOutlined />
                      </i>{" "}
                      Port Harcourt
                    </p>
                  </div>
                  <button className="rounded-full bg-black text-white py-2 px-10 mx-4 my-5">
                    Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
