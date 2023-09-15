import React from "react";
import { ContactbtOutline } from "../../components/Buttons/ContactBtn";
import bgImage from "../../assets/images/BgImages/bgImage1.svg";

export const ContactSec = () => {
  return (
    <section>
      <div
        className="flex bg-[#4834d4] h-96 justify-center items-center bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col text-center">
          <div className="flex">
            <div className="p-10 mr-10"> Phone image here</div>
            <div>
              {" "}
              <h1 className="text-gray-100 text-3xl font-normal leading-10 mb-4">
                Contact us to discuss how we can partner to make digital <br />
                payments simplified for you.
              </h1>
            </div>
          </div>
          <div className=" text-center ">
            <ContactbtOutline />
          </div>
        </div>
      </div>
    </section>
  );
};

//  default ContactSec;
