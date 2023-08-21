import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
};
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
    label: "Careers",
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
