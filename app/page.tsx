"use client"
import ChatBox from "../components/ChatBox";
import { useState } from "react";
import { IoClose } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';

export default function Home() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold">Homepage</h1>

      <div className="static">
        <button onClick={handleClick} className='absolute top-96 pt-1 z-10 right-0'>
          {click ? <IoClose className="w-6 h-6 mr-2" /> : <BsChatDots className="w-10 h-10 mr-1 animate-bounce hover:animate-none hover:scale-105" />} 
        </button>
        <div className={click ? "fixed top-96 right-0 ease-in-out duration-500" : "fixed right-[-100%] transition-all duration-500"}>
          <ChatBox />
        </div>   
      </div>
    </div>
  );
}
