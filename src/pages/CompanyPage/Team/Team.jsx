import React from "react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { TeamProfile } from "./TeamProfile";

const TeamPage = () => {
  return (
    <div>
      <Header />
      <div className="text-center m-5 p-5">
        <h1 className="text-center text-6xl tracking-wide leading-relaxed  font-medum">
          Meet the <span className="text-[#4834d4]">Team</span>
        </h1>
        <p className=" text-center font-normal  text-[#565555] tracking-wide leading-relaxed text-md">
          Lorem ipsum, dolor sit amet consectetur
        </p>
      </div>
      <div className="flex flex-row gap-8 justify-center py-10">
        <div>
          <button className="rounded-md font-Rubik bg-[#4255bd] hover:bg-indigo-700 text-white text-lg py-3 px-4 font-medium">
            Board Members
          </button>
        </div>
        <div>
          {" "}
          <button className="rounded-md  hover:bg-[#b4c0fbd7] text-[#4255bd] text-lg px-4 py-3 outline border-indigo-500">
            Team Members
          </button>
        </div>
      </div>
      <TeamProfile/>
      <Footer />
    </div>
  );
};

export default TeamPage;
