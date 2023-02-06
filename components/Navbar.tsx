"use client";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
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
      <header className="sticky top-0 z-50 grid grid-cols-4 bg-[#01094c] py-5 px-2 sm:p-2">
        {/*left*/}
        <div className="col-span-1 flex items-center">
          <Link href={"/"} className="flex justify-center items-center gap-1">
            <h1 className="w-full pl-2 text-3xl font-bold">Bolig</h1>
            <GoHome className="text-3xl" />
          </Link>
        </div>

        {/*right*/}
        <div className="col-span-3 flex items-center justify-end gap-2 pr-2">
          <ul className="hidden cursor-pointer sm:flex md:text-lg lg:text-xl">
            <li className="link-web">Sell Housing</li>
            <li className="link-web">Search Broker</li>
            <li className="link-web">News</li>
            <li className="link-web">Contact</li>
          </ul>

          <div className="flex items-center gap-2 rounded-full border-2 p-2 hover:bg-sky-700 sm:p-1 sm:px-3">
            <Link href={"login"}>
              <p className="hidden cursor-pointer sm:flex md:text-lg lg:text-xl">
                Login
              </p>
            </Link>
            <Link href={"login"}>
              <UserIcon className="h-6" />
            </Link>
            <div
              className="block cursor-pointer sm:hidden"
              onClick={handleClick}
            >
              {click ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6 hover:text-gray-200" />
              )}
            </div>
          </div>
        </div>
      </header>
      {/*mobile */}
      <div
        className={
          click
            ? "fixed right-0 top-0 h-full w-full bg-neutral-800 opacity-95 duration-500 ease-in sm:hidden"
            : "fixed right-0 -top-full h-full w-full duration-500 ease-out sm:hidden"
        }
      >
        <ul
          className="flex cursor-pointer flex-col items-center p-4 text-2xl"
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
