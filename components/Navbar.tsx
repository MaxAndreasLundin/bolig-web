'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaUser } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import React, { useCallback, useState } from 'react';

import Link from 'next/link';
import GetListOfAllResidence from './searchBar/GetListOfAllResidence';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = () => setClick(!click);

  const userIconClick = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/userDashboard');
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <>
      <header className="sticky top-0 z-50 my-2 grid w-full max-w-[1400px] grid-cols-4 px-2 sm:p-2">
        {/*left*/}
        <div className="relative flex items-center">
          <Link href={'/'} className="flex items-center justify-center gap-1">
            <h1 className="pl-2 text-3xl font-bold text-secondary">Bolig</h1>
            <GoHome className="text-3xl" />
          </Link>
        </div>

        {/* Middle */}
        <div className="invisible col-span-2 flex items-center justify-center py-2 md:visible">
          <ul className="flex gap-4 font-semibold text-primary">
            <li className="hover:scale-105">
              <Link href="/" className="hover-effect">
                Home
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="" className="hover-effect">
                Sell housing
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/news" className="hover-effect">
                News
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/contact" className="hover-effect">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/*right*/}
        <div className="flex items-center justify-end gap-2 pr-2">
          <div className="text-stone-800 hover:bg-sky-100 flex items-center gap-1 rounded-full border-2 bg-secondary px-3 py-1">
            <div className="hidden md:flex">
              <GetListOfAllResidence />
            </div>
            <div className="rounded-full px-2 py-1 md:px-1 ">
              <FaUser
                onClick={userIconClick}
                className="h-6 cursor-pointer text-white_bolig hover:scale-105"
              />
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
          <li className="link-mobile mt-20"><Link href={"/"}>Home</Link></li>
          <li className="link-mobile">Sell Housing</li>
          <li className="link-mobile"><Link href={"/news"}>News</Link>News</li>
          <li className="link-mobile border-none"><Link href={"/contact"}>Contact</Link></li>
          <li className='bg-primary w-full text-center py-2 rounded-xl'>
            <GetListOfAllResidence />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
