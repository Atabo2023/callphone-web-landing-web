import React from "react";
import logo from "../../assets/icons/logo.svg";
import { NavItems } from "./NavItems/NavItems";
import { Contactbtn } from "../Buttons/ContactBtn";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav>
      <div className="flex justify-between p-5 shadow-lg shadow-[#cce1fa] bg-white z-20 sticky h-20 w-full mt-0">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className=" min-w-[700px] px-4">
          <NavItems />
        </div>
        <div>
          <Contactbtn />
        </div>
      </div>
    </nav>
  );
};
