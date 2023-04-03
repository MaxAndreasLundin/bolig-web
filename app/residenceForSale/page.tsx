"use client";
import React, { useState, useEffect } from "react";
import ResidenceCard from "../../components/card/ResidenceCard";
import { ResidenceListProps } from "../../components/helpers/ResidenceList";
import SearchBar from "../../components/searchBar/SearchBar";
import { GiCoffeeCup } from 'react-icons/gi'
import SearchFormResicence from "../../components/searchFormSmallCard/SearchFormResicence";

const ResidenceForSale = () => {
  const [searchResult, setSearchResult] = useState<ResidenceListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedResult = localStorage.getItem("searchResult");
    if (storedResult) {
      setSearchResult(JSON.parse(storedResult));
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, []);

  return (
    <>
    <div className="flex h-[100vh] w-[100vw] flex-1 justify-center text-gray-500 border border-red-700">

      {isLoading ? (
        <div className="flex justify-center items-center gap-4">
        <p className="text-2xl animate-pulse">Loading...</p>
        <GiCoffeeCup className="h-8 w-8 animate-bounce"/>
      </div>
      ) : (
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1200px] border-2">
        <div className="flex md:hidden items-center justify-center w-full pt-6 px-8"><SearchBar /></div>
        <div className="hidden md:flex items-start justify-start pt-10 h-full w-[500px] border">
          <SearchFormResicence />
        </div>
        
        <div className="w-full my-10 border p-2">
          <h1 className="pb-4 text-4xl font-semibold">Residence for sale</h1>

          <div className="w-full">
            {searchResult.map((item) => (
              <div key={item.id}>
                <ResidenceCard
                  id={item.id}
                  title={item.title}
                  city={item.city}
                  description={item.description}
                  typeOfResidence={item.typeOfResidence}
                  price={item.price}
                  room={item.room}
                  area={item.area}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      )}
    </div>
    </>
  );
};

export default ResidenceForSale;
