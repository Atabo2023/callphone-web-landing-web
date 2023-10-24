import React from "react";
import { Card, Space } from "antd";
import {
  PieChartOutlined,
  LockOutlined,
  BookOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import { easeIn, motion } from "framer-motion";

export const RechargePin = () => {
  return (
    <div className="lg:flex ">
      <div className="grid md:grid-cols-2 grid-col-1 md:p-20 p-5 w-3/4 ">
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
              <p className="p-3">
                <PieChartOutlined
                  style={{ width: 200, fontSize: "4rem", paddingTop: "30px" }}
                />
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
              <p>
                <LockOutlined
                  style={{ width: 250, fontSize: "4rem", paddingTop: "20px" }}
                />
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
                Easy accounting, reconciliation, and audits
              </p>
              <p>
                <BookOutlined
                  style={{ width: 250, fontSize: "4rem", paddingTop: "20px" }}
                />
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
              <p className="text-xl font-normal text-center pt-10">
                {" "}
                Two-factor verification
              </p>
              <p>
                <SecurityScanOutlined
                  style={{ width: 250, fontSize: "4rem", paddingTop: "40px" }}
                />
              </p>
            </Card>
          </Space>
        </div>
      </div>
      <div className="lg:w-2/3 lg:p-0 p-5">
        <p className="text-4xl lg:p-5 mt-24 font-bold w-full lg:w-2/3 ">
          Universal Recharge Pin Generator API
        </p>
        <p className="p-5 lg:w-2/3 tracking-wide text-xl leading-relaxed">
          Businesses can now integrate the Airvend USSD API and enjoy lots of
          custom services.
          <ul className="list-disc p-5">
            <li> Customizable </li>
            <li> Airtime recharge</li>
            <li> vouchers and gifting</li>
            <li> Data subscription and gifting</li>
            <li> Electricity recharge </li>
            <li> Cable TV recharge and more</li>
            <li>One universal recharge pin for all networks</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
