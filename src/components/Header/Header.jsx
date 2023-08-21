import React from "react";
import logo from "../../assets/icons/logo.svg";
import { NavItems } from "./NavItems/NavItems";
export const Header = () => {
  return (
    <nav>
      <div className="flex justify-between p-5 shadow-md bg-white z-10 fixed h-20 w-full shadow-blue-100">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className=" min-w-[700px] px-4">
          <NavItems />
        </div>

        <div>
          <button className="rounded-md bg-indigo-600 text-white min-w-[200px] py-3 px-14 font-medium">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
