'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaUser } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import React, { useState } from 'react';

import Link from 'next/link';
import GetListOfAllResidence from './searchBar/GetListOfAllResidence';

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  const userIconClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/userDashboard';
    } else {
      window.location.href = '/login';
    }
  }

    return (
    <>
      <header className="sticky top-0 z-50 my-2 grid w-full max-w-[1400px] grid-cols-4 px-2 sm:p-2">
        {/*left*/}
        <div className="relative flex items-center">
          <Link href={'/'} className="flex items-center justify-center gap-1">
            <h1 className="text-secondary pl-2 text-3xl font-bold">
              Bolig
            </h1>
            <GoHome className="text-3xl" />
          </Link>
        </div>

        {/* Middle */}
        <div className="invisible col-span-2 flex items-center justify-center py-2 md:visible">
          <ul className="flex gap-4 font-semibold text-primary">
            <li className="hover:scale-105">
              <a href="" className="hover-effect">
                Home
              </a>
            </li>
            <li className="hover:scale-105">
              <a href="" className="hover-effect">
                Sell housing
              </a>
            </li>
            <li className="hover:scale-105">
              <a href="" className="hover-effect">
                News
              </a>
            </li>
            <li className="hover:scale-105">
              <a href="" className="hover-effect">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/*right*/}
        <div className="flex items-center justify-end gap-2 pr-2">
          <div className="text-stone-800 hover:bg-sky-100 flex items-center gap-1 rounded-full border-2 bg-secondary py-1 px-3">
            <div className="hidden md:flex">
              <GetListOfAllResidence />
            </div>
            <div className="rounded-full py-1 px-2 md:px-1 ">
              <Link href={'login'}>
                <FaUser onClick={userIconClick} className="h-6 text-white_bolig hover:scale-105" />
              </Link>
            </div>
            <div
              className="block cursor-pointer md:hidden"
              onClick={handleClick}
            >
              {click ? (
                <XMarkIcon className="h-6 text-white_bolig" />
              ) : (
                <Bars3Icon className="h-6 text-white_bolig" />
              )}
            </div>
          </div>
        </div>
      </header>
      {/*mobile */}
      <div
        className={
          click
            ? 'bg-white fixed right-0 top-0 z-20 h-full w-full bg-white_bolig duration-500 ease-in sm:w-[40%] md:hidden md:w-[30%] lg:w-[20%]'
            : 'fixed -right-full top-0 z-20 h-full w-full duration-500 ease-out sm:w-[40%] md:w-[30%] lg:w-[20%]'
        }
      >
        <ul
          className="flex cursor-pointer flex-col items-center p-4 text-2xl text-primary sm:text-xl"
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
