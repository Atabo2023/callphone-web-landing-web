import React from "react";
import { CaretDownOutlined} from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";

const onClick = ({ key }) => {};
const items = [
  {
    label: <Link to="/about">About</Link>,
    key: "1",
  },
  {
    label: <Link to="/team">Team</Link>,
    key: "2",
  },
  {
    label: <Link to="/gallery">Gallery</Link>,
    key: "3",
  },
  {
    label: <Link to="/career">Career</Link>,
    key: "4",
  },
];
const Company = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    style={{ height: "200px", width: "100px" }}
  >
    <a onClick={(e) => e.preventDefault()} className="hover:text-indigo-700">
      <Space>
        Company
        <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Company;
