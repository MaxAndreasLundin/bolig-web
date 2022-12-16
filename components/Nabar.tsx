"use client";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  //{click ? "bg-slate-500 flex flex-col items-center absolute right-0 top-16 h-56 w-full transition duration-500 z-10" : "web"}
  return (
    <header className="bg-gray-400 sticky top-0 h-20 z-50 grid grid-cols-2 p-4">
      {/*left*/}
      <div className="flex items-center">
        <h1 className="w-full text-3xl">Bolig</h1>
      </div>

      {/*right*/}
      <div className="flex items-center justify-end">
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Home</li>
          <li className="p-4">Home</li>
          <li className="p-4">Home</li>
        </ul>
        <div className="block md:hidden" onClick={handleClick}>
          {click ? <XIcon className="h-6" /> : <MenuIcon className="h-6" />}
        </div>
        {/*mobile */}
        <div
          className={
            click
              ? "fixed right-0 top-20 w-[50%] h-full border-r border-r-red-900 bg-gray-600 ease-in-out duration-500 md:hidden"
              : "fixed right-[-100%] top-20 h-full  w-[50%] transition-all duration-500"
          }
        >
          <h1 className="w-full text-3xl m-4">Bolig</h1>
          <ul className="p-4">
            <li className="p-4 border-b">Home</li>
            <li className="p-4 border-b">Home</li>
            <li className="p-4 border-b">Home</li>
            <li className="p-4 border-b">Home</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
