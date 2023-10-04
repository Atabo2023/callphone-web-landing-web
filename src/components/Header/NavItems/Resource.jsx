import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";
const onClick = ({ key }) => {};
const items = [
  {
    label: <Link to="/news">News</Link>,
    key: "1",
  },
  {
    label: <Link to="/testimonials">Testimonials</Link>,
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Videos
      </a>
    ),
    key: "3",
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
