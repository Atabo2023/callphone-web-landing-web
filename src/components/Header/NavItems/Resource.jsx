import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";
const onClick = ({ key }) => {};
const items = [
  {
    label: "News",
    key: "1",
  },
  {
    label: <Link to="/testimonials">Testimonials</Link>,
    key: "2",
  },
  {
    label: "Videos",
    key: "3",
  },
  {
    label: "Media Kit",
    key: "4",
  },
];
const Resources = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()} className="hover:text-indigo-700">
      <Space>
        Resources
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Resources;
