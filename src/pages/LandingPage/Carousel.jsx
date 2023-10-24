import React, { useEffect, useState } from "react";
import { Carousel, Spin } from "antd";
import Image2 from "../../assets/images/image2.svg";
import landingimg from "../../assets/images/SiteImages/OWINGK1.jpg";
import landingimg3 from "../../assets/images/SiteImages/pos.jpg";
import landingimg2 from "../../assets/images/SiteImages/responsive_device_64.png";
import landingimg4 from "../../assets/images/SiteImages/174.png";
import ussdimage from "../../assets/images/ussdImage.svg";

const contentStyle = {
  // height: "560px",
  color: "#4834d4",
  // lineHeight: "160px",
  justify: "center",
  textAlign: "center",
  background: "#e5effd",
  //   background: "#ddd6fe",
};

const CarouselPic = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle} className=" lg:h-[560px]">
        {" "}
        <img src={landingimg} alt="image" className="border rounded-2xl" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle} className=" lg:h-[560px]">
        <img src={landingimg2} alt="image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle} className="lg:pl-16 lg:h-[560px]">
        <img src={landingimg3} alt="image" className="border rounded-2xl" />
      </h3>
    </div>

    <div>
      <h3 style={contentStyle} className=" -translate-y-16 rounded-2xl">
        {/* <img src={landingimg4} alt="image" /> */}
        <img src={ussdimage} alt="image" />
      </h3>
    </div>
  </Carousel>
);

export default CarouselPic;
