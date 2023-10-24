import { Button } from "antd";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Card, Row, Space } from "antd";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const CardSec = () => {
  // Replace this with  actual logic to check if there are job openings
  const jobOpeningsAvailable = false; // For example, set this to true if there are openings

  if (jobOpeningsAvailable) {
    return (
      <div>
        <div>
          <h2 className="text-[#4834d4] text-lg py-1 mx-20 mt-10 font-semibold">
            Search for job openings
          </h2>
        </div>

        <div className="flex mx-16 mt-1">
          <input
            suffix={<SearchOutlined />}
            type="text"
            placeholder="search for a job..."
            className="border border-gray-300 rounded-md focus:border-[#4834d4] w-full p-2 my-10 mx-3"
          ></input>
          <div className="flex">
            <button className="p-2 my-10 mx-3 border border-gray-300 rounded-md hover:blue-200">
              Remote
            </button>
            <button className="p-2 my-10 mx-3 border border-gray-300 rounded-md hover:blue-200">
              onsite
            </button>
          </div>
        </div>
        <div className="m-20 ">
          <Row gutter={16}>
            <div className="p-1 m-2">
              <Space direction="vertical" size={16}>
                <Card
                  className="custom-career-cards"
                  style={{
                    width: 400,
                  }}
                >
                  <p className="text-xl font-medium py-5">Full Stack Dev</p>
                  <div className="p-2 flex justify-between">
                    <p>
                      <EnvironmentOutlined /> Lagos
                    </p>
                    <p>
                      <MailOutlined /> Remote
                    </p>
                  </div>
                  <hr />
                  <h5 className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    alias dignissimos cupiditate doloremque dicta totam hic
                    distinctio laboriosam. Nam nostrum iure asperiores
                    praesentium nihil eaque delectus hic suscipit nesciunt
                    voluptatibus?
                  </h5>
                  <button className="rounded-md border border-blue-400 py-2 px-10 my-5">
                    View Job
                  </button>
                </Card>
              </Space>
            </div>
            <div className="p-1 m-2">
              <Space direction="vertical" size={16}>
                <Card
                  className="custom-career-cards"
                  style={{
                    width: 400,
                  }}
                >
                  <p className="text-xl font-medium py-5">Backend Developer</p>
                  <div className="p-2 flex justify-between">
                    <p>
                      <EnvironmentOutlined /> Lagos
                    </p>
                    <p>
                      <MailOutlined /> Remote
                    </p>
                  </div>
                  <hr />
                  <h5 className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    alias dignissimos cupiditate doloremque dicta totam hic
                    distinctio laboriosam. Nam nostrum iure asperiores
                    praesentium nihil eaque delectus hic suscipit nesciunt
                    voluptatibus?
                  </h5>
                  <button className="rounded-md border border-blue-400 py-2 px-10 my-5">
                    View Job
                  </button>
                </Card>
              </Space>
            </div>
            <div className="p-1 m-2">
              <Space direction="vertical" size={16}>
                <Card
                  className="custom-career-cards"
                  style={{
                    width: 400,
                  }}
                >
                  <p className="text-xl font-medium py-5">Frontend Developer</p>
                  <div className="p-2 flex justify-between">
                    <p>
                      <EnvironmentOutlined /> Abuja
                    </p>
                    <p>
                      <MailOutlined /> Remote
                    </p>
                  </div>
                  <hr />
                  <p className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    alias dignissimos cupiditate doloremque dicta totam hic
                    distinctio laboriosam. Nam nostrum iure asperiores
                    praesentium nihil eaque delectus hic suscipit nesciunt
                    voluptatibus?
                  </p>

                  <button className="rounded-md border border-blue-400  py-2 px-10 my-5">
                    View Job
                  </button>
                </Card>
              </Space>
            </div>
            <div className="p-1 m-2">
              <Space direction="vertical" size={16}>
                <Card
                  className="custom-career-cards"
                  style={{
                    width: 400,
                  }}
                >
                  <p className="text-xl font-medium py-5">Data Analyst </p>
                  <div className="p-2 flex justify-between">
                    <p>
                      <EnvironmentOutlined /> Abuja
                    </p>
                    <p>
                      <MailOutlined /> Remote
                    </p>
                  </div>
                  <hr />
                  <p className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    alias dignissimos cupiditate doloremque dicta totam hic
                    distinctio laboriosam. Nam nostrum iure asperiores
                    praesentium nihil eaque delectus hic suscipit nesciunt
                    voluptatibus?
                  </p>

                  <button className="rounded-md border border-blue-400  py-2 px-10 my-5">
                    View Job
                  </button>
                </Card>
              </Space>
            </div>
            <div className="p-1 m-2">
              <Space direction="vertical" size={16}>
                <Card
                  className="custom-career-cards"
                  style={{
                    width: 400,
                  }}
                >
                  <p className="text-xl font-medium py-5">Product Management</p>
                  <div className="p-2 flex justify-between">
                    <p>
                      <EnvironmentOutlined /> Abuja
                    </p>
                    <p>
                      <MailOutlined /> Remote
                    </p>
                  </div>
                  <hr />
                  <p className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    alias dignissimos cupiditate doloremque dicta totam hic
                    distinctio laboriosam. Nam nostrum iure asperiores
                    praesentium nihil eaque delectus hic suscipit nesciunt
                    voluptatibus?
                  </p>

                  <button className="rounded-md border border-blue-400  py-2 px-10 my-5">
                    View Job
                  </button>
                </Card>
              </Space>
            </div>
            <div className="p-1 m-2">
              <Space direction="vertical" size={16}>
                <Card
                  className="custom-career-cards"
                  style={{
                    width: 400,
                  }}
                >
                  <p className="text-xl font-medium py-5">Sales Rep</p>
                  <div className="p-2 flex justify-between">
                    <p>
                      <EnvironmentOutlined /> Port Harcourt
                    </p>
                    <p>
                      <MailOutlined /> Remote
                    </p>
                  </div>
                  <hr />
                  <p className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    alias dignissimos cupiditate doloremque dicta totam hic
                    distinctio laboriosam. Nam nostrum iure asperiores
                    praesentium nihil eaque delectus hic suscipit nesciunt
                    voluptatibus?
                  </p>

                  <button className="rounded-md border border-blue-400  py-2 px-10 my-5">
                    View Job
                  </button>
                </Card>
              </Space>
            </div>
          </Row>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-justify px-5 my-20">
        <p className=" text-5xl font-bold  leading-tight text-center">
          Sorry, We are <span className=" text-[#4834d4]">not hiring</span> at
          the moment...
        </p>
      </div>
    );
  }
};
