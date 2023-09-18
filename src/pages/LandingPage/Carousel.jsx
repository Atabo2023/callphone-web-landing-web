import React from "react";
import { Carousel } from "antd";
import Image1 from "../../assets/images/image.svg";
import Image2 from "../../assets/images/image2.svg";
import Image3 from "../../assets/images/image3.svg";
import Image4 from "../../assets/images/phoneImage2.svg";

const contentStyle = {
  height: "460px",
  color: "#4834d4",
  lineHeight: "160px",
  textAlign: "center",
  background: "#e5effd",
  //   background: "#ddd6fe",
};

const CarouselPic = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img src={Image1} alt="image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src={Image3} alt="image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={Image4} alt="image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src={Image2} alt="image" />
      </h3>
    </div>
  </Carousel>
);

export default CarouselPic;
