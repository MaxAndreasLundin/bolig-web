"use client"

import SearchBar from "../components/searchBar/SearchBar";

export default function Home() {

  return (
    <div className="bg-bolig w-full flex flex-1 flex-col justify-center items-center relative border">
      <div className="absolute top-0 w-full">
        <SearchBar />
      </div>
      <h1 className="text-6xl font-extrabold mb-4">Homepage</h1>
      <p>A new home awaits, find it now!</p>
    </div>
  );
}
