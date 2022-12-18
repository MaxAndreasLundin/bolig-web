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
    <header className="bg-green-600 sticky top-0 h-20 z-50 grid grid-cols-4">
      {/*left*/}
      <div className="flex items-center col-span-1">
        <h1 className="w-full text-3xl pl-2">Bolig</h1>
      </div>

      {/*right*/}
      <div className="flex items-center justify-end col-span-3 pr-2 gap-2">
        <ul className="hidden sm:flex md:text-lg lg:text-xl cursor-pointer">
          <li className="link-web">Sälja bostad</li>
          <li className="link-web">Sök mäklare</li>
          <li className="link-web">Nyheter</li>
          <li className="link-web">Kontakt</li>
        </ul>
        <div className="flex items-center gap-2 border-2 p-2 sm:px-3 sm:p-1 rounded-full">
          <p className="hidden sm:flex md:text-lg lg:text-xl ">Logga in</p>
          <UserIcon className="h-6" />
          <div className="block sm:hidden cursor-pointer" onClick={handleClick}>
            {click ? <XIcon className="h-6" /> : <MenuIcon className="h-6 hover:text-gray-200" />}
          </div>
        </div>
        {/*mobile */}
        <div
          className={
            click
              ? "fixed right-0 top-20 w-[50%] h-full border-l border-l-black bg-green-600 ease-in-out duration-500 sm:hidden"
              : "fixed right-[-100%] top-20 h-full  w-[50%] transition-all duration-500"
          }
        >
          <h1 className="w-full text-3xl m-4">Bolig</h1>
          <ul className="p-4 cursor-pointer" onClick={() => setClick(false)}>
            <li className="link-mobile">Sälja bostad</li>
            <li className="link-mobile">Sök mäklare</li>
            <li className="link-mobile">Nyheter</li>
            <li className="link-mobile">Kontakt</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
