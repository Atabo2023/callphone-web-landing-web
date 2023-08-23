import React from "react";
import { Carousel } from "antd";
import Image1 from "../../assets/images/image.svg";
// import Image2 from "../../assets/images/airimage.svg";

const contentStyle = {
  height: "460px",
  color: "#4834d4",
  lineHeight: "160px",
  textAlign: "center",
  background: "#f5f3ff",
  //   background: "#ddd6fe",
};

const CarouselPic = () => (
  <Carousel autoplay >
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img src={Image1} alt="image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>AIRVEND</h3>
    </div>
    <div>
      <h3 style={contentStyle}>AIRPAY</h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src={Image1} alt="image" />
      </h3>
    </div>
  </Carousel>
);

export default CarouselPic;
