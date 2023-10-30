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
          "https://res.cloudinary.com/calllphone/image/upload/v1698179982/website%20Images/2023-05-19_09.11.42_w1a4ec.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698672746/website%20Images/_DSC9608_v9saea.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698672740/website%20Images/_DSC9643_jm9i7x.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698672734/website%20Images/_DSC9682_mmhnl0.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698672727/website%20Images/_DSC9824_bmlofu.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698672722/website%20Images/_DSC9851_ijjsgl.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698672710/website%20Images/_DSC9874_m4hpms.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698673177/website%20Images/_DSC9821_syqvk2.jpg",
          "https://res.cloudinary.com/calllphone/image/upload/v1698179988/website%20Images/WhatsApp_Image_2023-09-20_at_19.14.03_gqbluu.jpg",
        ].map((imageSrc, index) => (
          // <LazyLoad key={index} height={200} offset={100}>
          <Spin spinning={false} size="large" className="spinner-container">
            <Image
              key={index}
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
