"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-between bg-white">
      <div className="z-10 flex flex-col items-center justify-center pt-32 text-white">
        <h1 className="mb-4 text-7xl font-extrabold drop-shadow-2xl">Bolig</h1>
        <p className="text-2xl drop-shadow-2xl md:text-3xl">
          A new home awaits, find it now!
        </p>

        <Link href={"/residenceForSale"}>
          <button className="border rounded-xl p-2 my-12 lg:my-24 bg-white bg-opacity-80 text-gray-700 font-semibold hover:scale-105">Explore whats for sale</button>
        </Link>

      </div>

      <div className="opacity-90">
        <Image
          src="/Image/house8.jpg"
          alt="picture of house"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
    </div>
  );
}
