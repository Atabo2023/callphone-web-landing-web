import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import bgImage from "../../../assets/images/BgImages/bgImage1.svg";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  BankOutlined,
  DesktopOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const sidebarItems = [
  {
    label: "View All",
    key: "viewall-Testimonials",
    icon: <AppstoreOutlined />,
  },
  { label: "Airvend", key: "airvend-Testimonials", icon: <MobileOutlined /> },
  {
    label: "Agency Banking",
    key: "airpay-Testimonials",
    icon: <BankOutlined />,
  },
  { label: "Airgate", key: "airgate-Testimonials", icon: <DesktopOutlined /> },
  { label: "B2B", key: "b2b-Testimonials", icon: <UsergroupAddOutlined /> },
  { label: "USSD", key: "ussd-Testimonials", icon: <SolutionOutlined /> },
];

const Testimonials = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    navigate(item.key);
  };

  return (
    <div>
      <Header />
      <div
        className="text-white bg-[#4834d4] h-95 justify-center items-center bg-no-repeat z-40 p-10 bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center text-4xl md:text-6xl pt-20 tracking-wide leading-relaxed font-bold">
          Our Happy <span className="text-underline">Clients</span>
        </h1>
        <p className="text-center pb-40 pt-5 font-normal tracking-wide leading-relaxed text-md">
          Yours can be the next Success Story!
        </p>
      </div>
      <div className="md:flex grid">
        <div className="md:w-1/6 w-full bg-[#ffffff] lg:ml-20 md:mt-10 p-4 md:text-base text-sm ">
          {sidebarItems.map((item) => (
            <div
              key={item.key}
              onClick={() => handleMenuItemClick(item)}
              className="cursor-pointer p-4 flex items-center  hover:bg-[#e6e6e6] rounded-md"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="md:w-4/5 w-full bg-gray-50 pt-10 lg:p-10 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
