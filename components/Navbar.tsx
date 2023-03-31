"use client";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { FaUser } from 'react-icons/fa'
import { GoHome } from "react-icons/go";
import React, { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full grid grid-cols-4 bg-white p-1 px-2 sm:p-2 text-indigo-900">
        {/*left*/}
        <div className="relative flex items-center h-14">
          <Link href={"/"} className="flex justify-center items-center gap-1">
            <h1 className="w-full pl-2 text-3xl font-bold">Bolig</h1>
            <GoHome className="text-3xl" />
          </Link>
        </div>

        {/* Middle */}  
        <div className="invisible md:visible flex items-center col-span-2 justify-center py-2">
          <ul className="flex gap-4 font-semibold">
            <li className="hover:scale-105"><a href="" className="hover-effect">Home</a></li>
            <li className="hover:scale-105"><a href="" className="hover-effect">Sell housing</a></li>
            <li className="hover:scale-105"><a href="" className="hover-effect">News</a></li>
            <li className="hover:scale-105"><a href="" className="hover-effect">Contact</a></li>
          </ul>
        </div>

        {/*right*/}
        <div className="flex items-center justify-end gap-2 pr-2 h-14">
          <div className="flex items-center gap-1 rounded-full border-indigo-900 text-stone-800 border-2 py-1 px-3 hover:bg-sky-100">
            <div
              className="block cursor-pointer text-indigo-900 md:hidden"
              onClick={handleClick}
            >
              {click ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6" />
              )}
            </div>
            <div className="bg-indigo-900 rounded-full py-1 px-2 ">
              <Link href={"login"}>
                <FaUser className="h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/*mobile */}
      <div
        className={
          click
            ? "fixed right-0 top-0 h-full w-full sm:w-[40%] md:w-[30%] lg:w-[20%] bg-white opacity-90 duration-500 ease-in z-20 md:hidden"
            : "fixed -right-full top-0 h-full w-full sm:w-[40%] md:w-[30%] lg:w-[20%] duration-500 ease-out z-20"
        }
      >
        <ul
          className="flex cursor-pointer flex-col items-center p-4 text-2xl sm:text-xl text-indigo-900"
          onClick={() => setClick(false)}
        >
          <li className="link-mobile mt-20">Sell Housing</li>
          <li className="link-mobile">Search Broker</li>
          <li className="link-mobile">News</li>
          <li className="link-mobile">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
