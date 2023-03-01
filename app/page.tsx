"use client"
import Image from "next/image";
import houseImg from "./image/house8.jpg"

export default function Home() {

  return (
    <div className="bg-white w-full flex flex-1 flex-col justify-between items-center relative">
      <div className="flex flex-col justify-center items-center pt-20 z-10 text-white">
        <h1 className="text-7xl font-extrabold mb-4">Bolig</h1>
        <p className="text-2xl">A new home awaits, find it now!</p>
      </div>

      <div className="opacity-90">
        <Image src={houseImg} alt="picture of house" layout="fill" objectFit="cover"/>
      </div>
      
    </div>
  );
}
