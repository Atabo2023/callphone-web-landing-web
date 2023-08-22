import React from "react";
import logo from "../../assets/icons/logo.svg";
import { NavItems } from "./NavItems/NavItems";
import { Contactbtn } from "../Buttons/ContactBtn";
export const Header = () => {
  return (
    <nav>
      <div className="flex justify-between p-5 shadow-md bg-white z-10 sticky h-20 w-full shadow-blue-100 mt-0">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className=" min-w-[700px] px-4">
          <NavItems />
        </div>

        <div>
         <Contactbtn/>
        </div>
      </div>
    </nav>
  );
};
