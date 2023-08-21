import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Airvend",
    key: "1",
  },
  {
    label: "Airpay",
    key: "2",
  },
  {
    label: "Airgate",
    key: "3",
  },
  {
    label: "USSD",
    key: "4",
  },
];
const Products = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a
      onClick={(e) => e.preventDefault()}
      className="hover:text-indigo-700"
      overlay={items}
    >
      <Space>
        Products
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Products;
