import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import bgImage from "../../../assets/images/BgImages/bgImage1.svg";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import WebRoutes from "../../../routes/routes";

const { Content, Sider } = Layout;

const sidebarItems = [
  { label: "View All", key: "viewall-Testimonials" },
  { label: "Airvend", key: "airvend-Testimonials" },
  { label: "Agency Banking", key: "airpay-Testimonials" },
  { label: "Airgate", key: "airgate-Testimonials" },
  { label: "API", key: "airvend-Testimonials" },
  { label: "B2B", key: "airpay-Testimonials" },
  { label: "USSD", key: "airvend-Testimonials" },
];

const Testimonials = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    navigate(item.key);
    // console.log (item.key);
  };

  return (
    <div>
      <Header />
      <div
        className="text-white bg-[#4834d4] h-95 justify-center items-center bg-no-repeat z-40 p-10 bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center text-6xl pt-40 tracking-wide leading-relaxed font-bold">
          Our Happy <span className="text-underline">Clients</span>
        </h1>
        <p className="text-center pb-40 pt-5 font-normal tracking-wide leading-relaxed text-md">
          Yours can be the next Success Story! 😃
        </p>
      </div>

      <Layout
        style={{
          padding: "50px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Sider
          style={{
            overflow: "auto",
            width: "500px",

            backgroundColor: "#f9f9f9",
          }}
        >
          <div className="demo-logo-vertical w-1/5" />
          <Menu
            defaultSelectedKeys={["viewall-Testimonials"]}
            onClick={handleMenuItemClick}
            mode="vertical"
            theme="light"
            items={sidebarItems}
            style={{
              height: "100vh",
              backgroundColor: "#f9f9f9",
            }}
          >
            {sidebarItems.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Footer />
    </div>
  );
};

export default Testimonials;
