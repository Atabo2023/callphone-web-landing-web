import React from "react";
import { Card, Space } from "antd";
import { PieChartOutlined } from "@ant-design/icons";

export const RechargePin = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-2 p-10 w-3/4 ">
        <div className="p-1 m-2">
          <Space size={16}>
            <Card
              className="custom-card"
              style={{
                width: 300,
                height: 250,
              }}
            >
              <p className="text-xl font-medium text-center pt-10">
                {" "}
                Detailed Reporting
              </p>
              <p>
                <PieChartOutlined />
              </p>
            </Card>
          </Space>
        </div>
        <div className="p-1 m-2">
          <Space direction="vertical" size={16}>
            <Card
              className="custom-card"
              style={{
                width: 300,
                height: 250,
              }}
            >
              <p className="text-xl font-medium text-center pt-10">
                {" "}
                Advanced fraud detection mechanism
              </p>
              <p>Icon here</p>
            </Card>
          </Space>
        </div>
        <div className="p-1 m-2">
          <Space direction="vertical" size={16}>
            <Card
              className="custom-card"
              style={{
                width: 300,
                height: 250,
              }}
            >
              <p className="text-xl font-medium text-center pt-10">
                {" "}
                Easy accounting, reconciliation, and audits
              </p>
              <p>Icon here</p>
            </Card>
          </Space>
        </div>
        <div className="p-1 m-2">
          <Space direction="vertical" size={16}>
            <Card
              className="custom-card"
              style={{
                width: 300,
                height: 250,
              }}
            >
              <p className="text-xl font-normal text-center pt-10">
                {" "}
                Two-factor verification
              </p>
              <p>Icon here</p>
            </Card>
          </Space>
        </div>
      </div>
      <div className="w-2/3">
        <p className="text-4xl p-5 mt-24 font-bold w-2/3">
          Universal Recharge Pin Generator API
        </p>
        <p className="p-5 w-2/3">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor
          sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet.Lorem
          ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
          amet
        </p>
      </div>
    </div>
  );
};
