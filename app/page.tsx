"use client";
import Image from "next/image";
import bgImg from "../public/house9.webp";
import GetListOfAllResidence from "../components/searchBar/GetListOfAllResidence";

export default function Home() {
  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-between bg-white">
      <div className="z-10 flex flex-col items-center justify-center pt-32 text-white">
        <h1 className="mb-4 text-7xl font-extrabold drop-shadow-2xl">
          <a href="/">Bolig</a>
        </h1>
        <p className="text-2xl drop-shadow-2xl md:text-3xl">
          A new home awaits, find it now!
        </p>

        <GetListOfAllResidence />
      </div>

      <div className="absolute h-full w-full opacity-90">
        <Image src={bgImg} alt="house" fill priority={true} />
      </div>
    </div>
  );
}
