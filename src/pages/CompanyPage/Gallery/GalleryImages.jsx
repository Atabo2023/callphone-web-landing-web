import React from "react";
import { Image } from "antd";

const Images = () => {
  return (
    <div className="image-container">
      <Image.PreviewGroup>
        {[
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
          "https://drive.google.com/file/d/1t2r10dXusAc5y_orb_pEA3QghGQThdPg/view?usp=sharing",
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        ].map((imageSrc, index) => (
          <Image
            key={index}
            width="416px"
            height="416px"
            src={imageSrc}
            alt={`Image ${index + 1}`}
          />
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

export default Images;
