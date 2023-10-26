import React, { useState } from "react";
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
  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    setShowMap(true);
  };
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
                  <button
                    onClick={handleButtonClick}
                    className="rounded-full bg-black text-white py-2 px-10 mx-4 my-5"
                  >
                    Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMap && (
          <div className="lg:px-20 px-5 content-center m-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.473758314135!2d7.4741761752440095!3d9.11160918768994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bea119589dd%3A0xbc32b05b2d73a81f!2sCallphone%20Limited%20(Airvend)!5e0!3m2!1sen!2suk!4v1698270300301!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
