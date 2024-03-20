// import React from "react";
import logo from "../../assets/icons/logo.svg";
import { InstaIcon, LinkedinIcon, TwitterIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full lg:h-80">
      <div className="bg-slate-100 lg:p-14 lg:px-24 p-5">
        <div className="lg:grid-cols-2 grid  ">
          <div className="lg:w-3/5 lg:p-2">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p className="text-sm text-justify lg:p-2 px-3 mt-2 font-light py-3 w-full text-[#565555] tracking-wide leading-relaxed">
                Callphone Ltd is an impact-driven payment solution and virtual
                services distribution provider. A company registered under the
                law (RC 957797) by the Federal Republic of Nigeria. CallPhone
                was incorporated in 2015 and in early 2016 introduced an
                e-commerce product called AIRVEND which is a mobile/web
                application.
              </p>
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-4 px-3 grid-cols-2 lg:col-span-1 col-span-2">
            <ul>
              <h2 className="font-bold py-2"> Product</h2>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/airvend">Airvend</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/airpay">Airpay</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/airgate">Airgate</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/ussdPage">USSD</Link>
              </li>
            </ul>
            <ul>
              <h2 className="font-bold py-2">Company</h2>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/about">About</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/team">Team</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/career">Careers</Link>
              </li>
            </ul>
            <ul>
              <h2 className="font-bold py-2">Resources</h2>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/news">News</Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/testimonials/viewall-Testimonials">
                  Testimonials
                </Link>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <a
                  href="https://www.youtube.com/@airvendng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Videos
                </a>
              </li>
              <li className="font-light py-2 text-[#565555]">
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
            <ul>
              <h2 className="font-bold py-2"> Contact </h2>
              <li className="font-light py-2 text-[#565555]">
                (+234)9061163130
              </li>
              <li className="font-light py-2 underline text-[#565555]">
                <a href="mailto:info@callphoneng.com">info@callphoneng.com</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <ul className="lg:flex p-2 mt-5 lg:gap-32 ">
              <div>
                <p className="font-bold p-2 mt-4">Office Address:</p>
              </div>
              <li>
                <p className="font-bold p-2"> Abuja</p>
                <p className="font-light p-2 text-[#565555]">
                  Plot 1152, Cadastral Zone, Katampe District, opposite Bon
                  Hotels Grand Towers. Abuja.
                </p>
              </li>
              <li>
                <p className="font-bold p-2">Lagos</p>
                <p className="font-light p-2 text-[#565555]">
                  8a Residence Street,Gbagada Phase 2, Gbagada, Lagos State.
                </p>
              </li>
              <li>
                <p className="font-bold p-2">Port Harcourt</p>
                <p className="font-light p-2 text-[#565555]">
                  SAAC PLAZA, K/m 60, PH/ABA express road, Opposite Timber
                  market, Oyigbo, Rivers State.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="m-10 "></hr>
        <div className="grid lg:grid-cols-2 gap-4 p-8 ">
          <div>
            <p className="pt-8 text-sm text-[#565555]">
              © {new Date().getFullYear()} Copyrights. Callphone LTD.
            </p>
          </div>
          <div className="flex gap-4 md:justify-end p-2">
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
      </div>
    </footer>
  );
};
