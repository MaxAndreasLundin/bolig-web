'use client';
import React, { useState, useEffect } from 'react';
import ResidenceCard from '../../components/card/ResidenceCard';
import { ResidenceListProps } from '../../components/helpers/ResidenceList';
import SearchBar from '../../components/searchBar/SearchBar';
import { GiCoffeeCup } from 'react-icons/gi';
import SearchFormResicence from '../../components/searchFormSmallCard/SearchFormResicence';

const ResidenceForSale = () => {
  const [searchResult, setSearchResult] = useState<ResidenceListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedResult = localStorage.getItem('searchResult');
    if (storedResult) {
      setSearchResult(JSON.parse(storedResult));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] flex-1 justify-center text-primary">
        {isLoading ? (
          <div className="flex items-center justify-center gap-4">
            <p className="animate-pulse text-2xl">Loading...</p>
            <GiCoffeeCup className="h-8 w-8 animate-bounce" />
          </div>
        ) : (
          <div className="flex w-full max-w-[1400px] flex-col items-center justify-center bg-white_bolig md:flex-row lg:rounded-lg">
            <div className="flex w-full items-center justify-center px-8 pt-6 md:hidden">
              <SearchBar />
            </div>
            <div className="hidden h-full w-[500px] items-start justify-start pt-14 md:flex">
              <SearchFormResicence />
            </div>

            <div className="my-10 w-full p-2">
              <h1 className="pl-4 pb-4 text-4xl font-semibold">
                Residence for sale
              </h1>

              <div className="w-full">
                {searchResult.map((item) => (
                  <div key={item.id}>
                    <ResidenceCard
                      id={item.id}
                      title={item.title}
                      location={item.location}
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
