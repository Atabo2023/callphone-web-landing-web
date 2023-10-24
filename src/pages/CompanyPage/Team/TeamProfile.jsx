import React from "react";
import { Card } from "antd";
import image10 from "../../../assets/images/image10.svg";
import image01 from "../../../assets/images/Team_Images/image.svg";
import image02 from "../../../assets/images/Team_Images/image2.svg";
import image03 from "../../../assets/images/Team_Images/image3.svg";
import image04 from "../../../assets/images/Team_Images/image4.svg";
import image05 from "../../../assets/images/Team_Images/image5.svg";
import image06 from "../../../assets/images/Team_Images/image6.svg";

const { Meta } = Card;

export const TeamProfile = () => {
  return (
    <div className=" lg:grid grid-cols-4 p-10 lg:px-28 gap-10">
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image01} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">Chairman</p>
        <p className="text-xl font-normal text-center">Nze Chidi Duru</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image02} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Frank Nweke Jnr</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image03} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Micheal Ojiakor</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image04} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Nana Nwachukwu</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image05} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Henry Andoh</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image06} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">Board Members</p>
        <p className="text-xl font-normal text-center">Ugochukwu Duru</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={
          <img
            src="https://res.cloudinary.com/calllphone/image/upload/v1698177284/website%20Images/MD_S_HEADSHOT_wjhwo4.png"
            alt="img"
          />
        }
      >
        <p className="text-md text-[#444444] text-center">
          Managing Director/Chief Excutive Officer
        </p>
        <p className="text-xl font-normal text-center">Ekezie Precious</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
      <Card
        style={{ padding: "10px", marginTop: "20px" }}
        cover={<img src={image10} alt="img" />}
      >
        <p className="text-md text-[#444444] text-center">
          ED Financial Inclusion Services
        </p>
        <p className="text-xl font-normal text-center">Lanre Mosope Olaseken</p>
        <p className="text-lg justify-center flex gap-3 p-2"></p>
      </Card>
    </div>
  );
};
