import React from "react";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/airvend">Airvend</Link>,
    key: "1",
  },
  {
    label: <Link to="/airvend">Airpay</Link>,
    key: "2",
  },
  {
    label: <Link to="/airvend">Airgate</Link>,
    key: "3",
  },
  {
    label: <Link to="/airvend">USSD</Link>,
    key: "4",
  },
];
const Products = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a className="hover:text-indigo-700" overlay={items}>
      <Space>
        Products
        {/* <DownOutlined 
       /> */}
        <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Products;
