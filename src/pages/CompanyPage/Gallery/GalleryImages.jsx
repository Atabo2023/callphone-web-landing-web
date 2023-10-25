import React from "react";
import { Image, Spin } from "antd";

const Images = () => {
  return (
    <div className="image-container p-10">
      <Image.PreviewGroup>
        {[
          "https://res.cloudinary.com/calllphone/image/upload/v1698179985/website%20Images/2023-06-19_08.17.47_xuyphc.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698179982/website%20Images/2023-04-28_16.36.35_demkum.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698179982/website%20Images/2023-04-28_16.36.34_eegxzl.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698179988/website%20Images/WhatsApp_Image_2023-09-20_at_19.14.03_gqbluu.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698179982/website%20Images/2023-05-19_09.11.42_w1a4ec.jpg",
        ].map((imageSrc, index) => (
          // <LazyLoad key={index} height={200} offset={100}>
          <Spin spinning={false} size="large" className="spinner-container">
            <Image
              key={index}
              // width="416px"
              // height="416px"
              // className="image-container"
              // minWidth="300px"
              src={imageSrc}
              alt={`Image ${index + 1}`}
              placeholder={<Spin size="large" />}
            />
          </Spin>
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

export default Images;
