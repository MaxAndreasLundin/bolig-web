"use client";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="bg-gray-400 sticky top-0 h-20 z-50 grid grid-cols-4">
      {/*left*/}
      <div className="flex items-center col-span-1">
        <h1 className="w-full text-3xl pl-2">Bolig</h1>
      </div>

      {/*right*/}
      <div className="flex items-center justify-end col-span-3 pr-2">
        <ul className="hidden sm:flex md:text-lg lg:text-xl cursor-pointer">
          <li className="p-4 inline-block">Sälja bostad</li>
          <li className="p-4 inline-block">Sök mäklare</li>
          <li className="p-4 inline-block">Nyheter</li>
          <li className="p-4 inline-block">Kontakt</li>
        </ul>
        <div className="flex items-center gap-2 border-2 p-2 sm:px-3 sm:p-1 rounded-full">
          <p className="hidden sm:flex md:text-lg lg:text-xl">Logga in</p>
          <UserIcon className="h-6" />
          <div className="block sm:hidden cursor-pointer" onClick={handleClick}>
            {click ? <XIcon className="h-6" /> : <MenuIcon className="h-6" />}
          </div>
        </div>
        {/*mobile */}
        <div
          className={
            click
              ? "fixed right-0 top-20 w-[50%] h-full border-r border-r-red-900 bg-gray-600 ease-in-out duration-500 sm:hidden"
              : "fixed right-[-100%] top-20 h-full  w-[50%] transition-all duration-500"
          }
        >
          <h1 className="w-full text-3xl m-4">Bolig</h1>
          <ul className="p-4 cursor-pointer" onClick={() => setClick(false)}>
            <li className="p-4 border-b">Sälja bostad</li>
            <li className="p-4 border-b">Sök mäklare</li>
            <li className="p-4 border-b">Nyheter</li>
            <li className="p-4 border-b">Kontakt</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
