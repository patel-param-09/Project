import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Contact from "./Contact";
import { FaInstagram, FaWhatsapp, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className=" w-full md:w-1/4">
            <h1 className=" font-semibold text-xl pb-4">FoodieWeb</h1>
            <p className=" text-sm">
              Indulge in a symphony of flavors, where each plate is a canvas for
              culinary excellence.
            </p>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
            <nav className=" flex flex-col gap-2">
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Dishes
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                About
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Menu
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Reviews
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
            <nav className=" flex flex-col gap-2">
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Our Dishes
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                Premium Menu
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
              Contact Us
            </h1>
            <nav className=" flex flex-col gap-2">
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                FoodieWeb@email.com
              </a>
              <a
                className=" hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                +64 958 248 966
              </a>
              <a href="/" className="flex gap-3 text-xl mt-2">
                <span className=" hover:text-brightColor transition-all cursor-pointer">
                  <FaInstagram />
                </span>
                <span className=" hover:text-brightColor transition-all cursor-pointer">
                  <FaGoogle />
                </span>
                <span className=" hover:text-brightColor transition-all cursor-pointer">
                  <FaWhatsapp />
                </span>
                <span className=" hover:text-brightColor transition-all cursor-pointer">
                  <FaFacebook />
                </span>
              </a>
              <span className="mt-5">Opaning Hours : 9:00 AM to 11:00 PM</span>
            </nav>
          </div>
          <div className=" bg-black text-white mt-5 md:mt-0 pl-8 flex flex-col">
            <Contact />
          </div>
        </div>
        <div>
          <p>
            <p className=" text-center py-4">
              @copyright developed by
              <span className=" text-brightColor"> champion programmers</span> |
              All rights reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
