import React from "react";
import Products from "./Products";
import Company from "./Company";
import Resources from "./Resource";
import Blog from "./Blog";

export const NavItems = () => {
  return (
    <div className="flex justify-evenly ">
      <Products />
      <Company />
      <Resources />
      <Blog />
    </div>
  );
};
