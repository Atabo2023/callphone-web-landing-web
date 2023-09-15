import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";

const onClick = ({ key }) => {};
const items = [
  {
    label: "About",
    key: "1",
  },
  {
    label: "Team",
    key: "2",
  },
  {
    label: "Gallery",
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
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Company;
