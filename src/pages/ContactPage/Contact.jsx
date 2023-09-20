import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card, Row, Space } from "antd";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="text-center m-5 p-5">
        <h1 className="text-center text-6xl p-10 tracking-wide leading-relaxed  font-medum">
          Contact Us
        </h1>
        <p className=" text-center font-normal  text-[#565555] tracking-wide leading-relaxed text-md">
          Contact Callphone Limited right now; <br /> let us know how we can
          work together. Available 24/7.
        </p>
      </div>
      <div className="m-20 ">
        <Row gutter={16}>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                  height: 250,
                }}
              >
                <p className="text-3xl font-extrabold justify-left">
                  <MailOutlined />
                </p>
                <p className="text-xl font-medium py-5"> Email</p>
                <h5>support@callphone.ng</h5>
                <button className="rounded-full bg-black text-white py-2 px-10 my-5">
                  CONTACT
                </button>
              </Card>
            </Space>
          </div>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                  height: 250,
                }}
              >
                <p className="text-3xl font-extrabold justify-left">
                  <PhoneOutlined />
                </p>
                <p className="text-xl font-medium py-5"> Phone</p>
                <h5>
                  Office. <u>234 567 8910 0000</u>
                </h5>
                <button className="rounded-full bg-black text-white py-2 px-10 my-5">
                  CALL
                </button>
              </Card>
            </Space>
          </div>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                  height: 250,
                }}
              >
                <p className="text-3xl font-extrabold justify-left">
                  <EnvironmentOutlined />
                </p>
                <p className="text-xl font-medium py-5">Office</p>
                <div className="flex justify-around">
                  <p>
                    {" "}
                    <EnvironmentOutlined /> Abuja
                  </p>
                  <p>
                    {" "}
                    <EnvironmentOutlined /> Lagos
                  </p>
                  <p>
                    {" "}
                    <EnvironmentOutlined /> Port Harcourt
                  </p>
                </div>
                <button className="rounded-full bg-black text-white py-2 px-10 my-5">
                  Location
                </button>
              </Card>
            </Space>
          </div>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
