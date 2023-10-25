import React from "react";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

// const onClick = ({ key }) => {
//   setOpen(!isOpen);
// };

const items = [
  {
    label: <Link to="/airvend">Airvend</Link>,
    key: "1",
  },
  {
    label: <Link to="/airpay">Airpay</Link>,
    key: "2",
  },
  {
    label: <Link to="/airgate">Airgate</Link>,
    key: "3",
  },
  {
    label: <Link to="/UssdPage">USSD</Link>,
    key: "4",
  },
];
const Products = () => (
  <Dropdown
    menu={{
      items,
      // onClick
    }}
    // onClick={() => setOpen(!isOpen)}
  >
    {/* {isOpen && ( */}
      <a className="hover:text-indigo-700" overlay={items}>
        <Space>
          Products
          <CaretDownOutlined />
        </Space>
      </a>
    {/* )} */}
  </Dropdown>
);
export default Products;
