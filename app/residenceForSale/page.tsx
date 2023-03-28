"use client";
import React, { useState, useEffect } from "react";
import ResidenceCard from "../../components/card/ResidenceCard";
import { ResidenceListProps } from "../../components/helpers/ResidenceList";

const ResidenceForSale = () => {
  const [searchResult, setSearchResult] = useState<ResidenceListProps[]>([]);

  useEffect(() => {
    const storedResult = localStorage.getItem("searchResult");
    if (storedResult) {
      setSearchResult(JSON.parse(storedResult));
    }
  }, []);

  return (
    <div className="bg-white text-gray-500">
      <div className="my-10 border-b p-2">
        <h1 className="pb-4 text-4xl font-semibold">Residence for sale</h1>

        <div>
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
  );
};

export default ResidenceForSale;
