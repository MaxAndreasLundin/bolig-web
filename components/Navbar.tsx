"use client";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { FaUser } from 'react-icons/fa'
import { GoHome } from "react-icons/go";
import React, { useState } from "react";

import Link from "next/link";
import SearchBar from "./searchBar/SearchBar";

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-4 bg-blue-50 p-1 px-2 sm:p-2">
        {/*left*/}
        <div className="relative flex items-center h-14 text-blue-900">
          <Link href={"/"} className="flex justify-center items-center gap-1">
            <h1 className="w-full pl-2 text-3xl font-bold text-blue-900">Bolig</h1>
            <GoHome className="text-3xl" />
          </Link>
        </div>

        {/* Middle */}  
        <div className="flex items-center col-span-2 justify-center py-2">
          <SearchBar />
        </div>

        {/*right*/}
        <div className="flex items-center justify-end gap-2 pr-2 h-14">
          <div className="flex items-center gap-1 rounded-full border-blue-900 text-blue-900 border-2 py-1 px-3 hover:bg-blue-100">
            <div
              className="block cursor-pointer"
              onClick={handleClick}
            >
              {click ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6" />
              )}
            </div>
            <div className="bg-blue-900 rounded-full py-1 px-2 ">
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
            ? "fixed right-0 top-0 h-full w-full sm:w-[40%] md:w-[30%] lg:w-[20%] bg-blue-50 opacity-95 duration-500 ease-in z-20"
            : "fixed right-0 -top-full h-full w-full sm:w-[40%] md:w-[30%] lg:w-[20%] duration-500 ease-out z-20"
        }
      >
        <ul
          className="flex cursor-pointer flex-col items-center p-4 text-2xl sm:text-xl"
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
