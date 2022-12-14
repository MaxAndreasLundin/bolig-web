"use client"
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const ToggleMenu = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = (): void => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <>
      <div className="block transform -translate-x-full" onClick={handleClick}>{ click ? <XIcon className="h-6"/> : <MenuIcon className="h-6"/>}</div>

      <ul className={click ? "toggleMenu bg-blue-900 right-0 z-10" : "toggleMenu -right-full"}>
        <li className="items-center text-center p-4">Home</li>
        <li className="items-center text-center p-4">About</li>
        <li className="items-center text-center p-4">Contact</li>
      </ul>
    </>
  );
};

export default ToggleMenu;
