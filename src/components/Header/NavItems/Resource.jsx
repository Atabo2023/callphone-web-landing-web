import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";
const onClick = ({ key }) => {};
const items = [
  {
    label: <Link to="/news">News</Link>,
    key: "1",
  },
  {
    label: <Link to="/testimonials/viewall-Testimonials">Testimonials</Link>,
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.youtube.com/@airvend_ng"
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
        <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Resources;
