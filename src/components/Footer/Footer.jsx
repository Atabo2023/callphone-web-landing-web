import React from "react";
import logo from "../../assets/icons/logo.svg";
import { InstaIcon, LinkedinIcon, TwitterIcon } from "../../assets/icons";

export const Footer = () => {
  return (
    <footer className="w-full h-80 p-14">
      <div className="grid grid-cols-2 gap-15 ">
        <div className="w-80 p-2">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className="text-sm text-justify p-2 mt-2 font-light">
              Callphone Ltd is an impact-driven payment solution and virtual
              services distribution provider. A company registered under the law
              (RC 957797) by the Federal Republic of Nigeria. CallPhone was
              incorporated in 2015 and in early 2016 introduced an e-commerce
              product called AIRVEND which is a mobile/web application.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 ">
          <ul>
            <h2 className="font-bold py-2"> Product</h2>
            <li className="font-light p-2">
              <a href="/ ">Airvend</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Airpay</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Airgate</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">USSD</a>
            </li>
          </ul>
          <ul>
            <h2 className="font-bold py-2">Company</h2>
            <li className="font-light p-2">
              <a href="/ ">About</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Team</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Gallery</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Careers</a>
            </li>
          </ul>
          <ul>
            <h2 className="font-bold py-2">Resources</h2>
            <li className="font-light p-2">
              <a href="/ ">News</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Blog</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Videos</a>
            </li>
            <li className="font-light p-2">
              <a href="/ ">Media Kits</a>
            </li>
          </ul>
          <ul>
            <h2 className="font-bold py-2"> Contact </h2>
            <p className="font-light p-2">Address:</p>
            <p className="font-bold p-2"> Abuja</p>
            <p className="font-light p-2">
              Plot 1152, Cadastral Zone, Katampe District, opposite Bon Hotels
              Grand Towers. Abuja.
            </p>
            <p className="font-bold p-2">Lagos</p>
            <p className="font-light p-2">Gbagada Lagos</p>
            <p className="font-bold p-2">Port Harcourt</p>
            <p className="font-light p-2">Port Harcourt</p>
            <p className="font-light p-2">(+234)9061163130</p>
            <p className="font-light p-2 underline">
              <a href="mailto:info@callphoneng.com">info@callphoneng.com</a>
            </p>
          </ul>
        </div>
      </div>
      <hr className="m-10"></hr>
      <div className="grid grid-cols-2 gap-4 p-8">
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Copyrights. Callphone LTD.
          </p>
        </div>
        <div className="flex gap-4 justify-end p-2">
          <div>
            <InstaIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
          <div>
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};
