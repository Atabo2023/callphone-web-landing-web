import React from "react";
import bgimage from "../../../../assets/images/BgImages/bgImage2.svg"

export const AboutHero = () => {
  return (
    <>
      <div className="bg-[#e5effd] lg:p-40 p-5 mt-1 overscroll-x-none "
       style={{ backgroundImage: `url(${bgimage})` , backgroundRepeat: "no-repeat", backgroundPosition: "right"}}
      >
        <div className="lg:text-6xl text-4xl font-bold leading-tight text-center">
          <h2>
            Providing Simplified <br /> Payment Solutions
            <span className=" text-[#4834d4] underline"> For All</span>{" "}
          </h2>
        </div>
        <div>
          <p className="font-normal mt-5 text-center w-auto text-[#565555] tracking-wide leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Possimus
            animi debitis suscipit sunt delectus <br></br>quos molestiae vel. Harum ipsa
            molestiae quo, dolorum expedita aut.
          </p>
        </div>
      </div>
    </>
  );
};
