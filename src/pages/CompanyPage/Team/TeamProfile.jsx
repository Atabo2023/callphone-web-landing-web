import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import image10 from "../../../assets/images/image10.svg";

const { Meta } = Card;

export const TeamProfile = () => {
  return (
    <div className=" lg:grid grid-cols-4 p-10 gap-10">
  
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Chairman</p>
        <p className="text-xl font-normal text-center">Nze Chidi Duru</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Frank Nweke Jnr</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card
      style={{padding:"10px"}} 
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Micheal Ojiakor</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Nana Nwachukwu</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Henry Andoh</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Ugochukwu Duru</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">Managing Director/Chief Excutive Officer</p>
        <p className="text-xl font-normal text-center">Ekezie Precious</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
      <Card 
      style={{padding:"10px"}}
      cover={<img src={image10} alt="img" />}>
        <p className="text-md text-[#444444] text-center">ED Financial Inclusion Services</p>
        <p className="text-xl font-normal text-center">Lanre Mosope Olaseken</p>
        <p className="text-lg justify-center flex gap-3 p-2">
          <TwitterOutlined />
          <LinkedinOutlined />
          <FacebookOutlined />
        </p>
      </Card>
    </div>
  );
};
