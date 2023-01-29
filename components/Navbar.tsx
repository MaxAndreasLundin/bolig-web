"use client";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

import Link from "next/link";


const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
    <header className="sticky h-20 top-0 z-50 grid grid-cols-4">
      {/*left*/}
      <div className="flex items-center col-span-1">
        <Link href={"/"}><h1 className="w-full text-3xl pl-2">Bolig</h1></Link>
      </div>

      {/*right*/}
      <div className="flex items-center justify-end col-span-3 pr-2 gap-2">
        <ul className="hidden sm:flex md:text-lg lg:text-xl cursor-pointer">
          <li className="link-web">Sell Housing</li>
          <li className="link-web">Search Broker</li>
          <li className="link-web">News</li>
          <li className="link-web">Contact</li>
          <Link href={"chat"}><li className="link-web">Chat</li></Link>
        </ul>

        <div className="flex items-center gap-2 border-2 p-2 sm:px-3 sm:p-1 rounded-full hover:bg-sky-700">
            
              <Link href={"login"}><p className="hidden sm:flex md:text-lg lg:text-xl cursor-pointer">Login</p></Link>
              <Link href={"login"}><UserIcon className="h-6" /></Link>
          <div className="block sm:hidden cursor-pointer" onClick={handleClick}>
            {click ? <XIcon className="h-6" /> : <MenuIcon className="h-6 hover:text-gray-200" />}

          </div>
        </div>
      </div>
    </header>
    {/*mobile */}
    <div
      className={
        click
          ? "fixed right-0 top-0 w-full h-full bg-neutral-800 opacity-95 ease-in-out duration-500 sm:hidden"
          : "fixed right-0 top-[-100%] h-full  w-full transition-all duration-500"
      }
    >
      <ul className="flex flex-col items-center p-4 text-2xl cursor-pointer" onClick={() => setClick(false)}>
        <li className="link-mobile mt-20">Sell Housing</li>
        <li className="link-mobile">Search Broker</li>
        <li className="link-mobile">News</li>
        <li className="link-mobile">Contact</li>
        <Link href={"chat"} className="link-mobile"><li>Chat</li></Link>
      </ul>
    </div>
    </>
  );
};

export default Navbar;
