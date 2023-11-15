import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { NavItems } from "./NavItems/NavItems";
import { Contactbtn } from "../Buttons/ContactBtn";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsDropdown = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent container
    setProductsOpen(!isProductsOpen);
  };
  const toggleCompanyDropdown = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent container
    setCompanyOpen(!isCompanyOpen);
  };
  const toggleResourceDropdown = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent container
    setResourceOpen(!isResourceOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="flex justify-between lg:px-28 px-5 py-5 shadow-lg shadow-[#cce1fa] bg-white z-20 sticky h-20 w-full mt-0">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* For responsiveness */}
        <div className="relative justify-end">
          {/* Hamburger Menu */}
          <button
            className="text-blue-900 flex focus:outline-none lg:hidden mr-5 "
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {isMenuOpen && (
            <>
              <div
                className="w-4/5 ease-in-out fixed inset-0 bg-[#021856] lg:hidden text-white opacity-90 z-40"
                onClick={closeMenu}
              >
                <ul>
                  <li className="grid pt-14 px-5 text-xl font-normal">
                    <span
                      onClick={toggleProductsDropdown}
                      className="hover:bg-indigo-700 p-3"
                    >
                      Products
                    </span>
                    {isProductsOpen && (
                      <ul>
                        <li className="px-6 py-3 hover:bg-indigo-700 ">
                          <Link to="/airvend">Airvend</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/airpay">Airpay</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/airgate">Airgate</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/UssdPage">USSD</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="grid px-5 text-xl font-normal">
                    <span
                      onClick={toggleCompanyDropdown}
                      className="hover:bg-indigo-700 p-3"
                    >
                      Company
                    </span>
                    {isCompanyOpen && (
                      <ul>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/about">About</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/team">Team</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/career">Career</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="grid px-5 text-xl font-normal">
                    <span
                      onClick={toggleResourceDropdown}
                      className="hover:bg-indigo-700 p-3"
                    >
                      Resources
                    </span>
                    {isResourceOpen && (
                      <ul>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/news">News</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <Link to="/testimonials">Testimonials</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-indigo-700">
                          <a
                            href="https://www.youtube.com/@airvendng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Videos
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="grid m-4 text-xl py-2 hover:bg-indigo-700 font-normal">
                    <Link to="/blog">
                      <h5 className="px-4 "> Blog </h5>
                    </Link>
                  </li>
                  <li className="px-6 py-6 rounded-md ">
                    <Contactbtn />
                  </li>
                </ul>
                {/* </div> */}
              </div>
            </>
          )}
        </div>

        {/* large screen responsiveness here  */}
        <div className=" hidden lg:grid grid-flow-row lg:min-w-[700px] px-4">
          <NavItems />
        </div>
        <div className="hidden lg:flex">
          <Contactbtn />
        </div>
      </div>
    </nav>
  );
};
// export default Header;
