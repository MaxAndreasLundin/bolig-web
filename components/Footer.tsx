import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-16">
      <div className="grid grid-cols-1 sm:grid-cols-4 w-full h-full">
        <div className="flex sm:col-start-2 sm:col-span-2 justify-center items-center w-full gap-2 text-sm sm:text-base">
          <FaInstagram />
          <p className="pr-2">Instagram</p>
          <FaFacebookSquare />
          <p className="pr-2">Facebook</p>
          <FaLinkedinIn />
          <p>Linkedin</p>
        </div>
        <div className="flex sm:col-end-5 justify-center sm:justify-end items-center w-full sm:pr-6 text-sm sm:text-base">
          &copy;Bolig 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
