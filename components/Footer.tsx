import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white w-full max-w-[1400px] flex-shrink-0 p-5 text-primary">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-4">
        <div className="flex w-full items-center justify-center gap-2 text-sm font-semibold sm:col-span-2 sm:col-start-2 sm:text-base">
          <FaInstagram />
          <p className="pr-2">Instagram</p>
          <FaFacebookSquare />
          <p className="pr-2">Facebook</p>
          <FaLinkedinIn />
          <p>Linkedin</p>
        </div>
        <div className="flex w-full items-center justify-center text-sm font-semibold text-third sm:col-end-5 sm:justify-end sm:pr-6 sm:text-base">
          &copy;Bolig 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
