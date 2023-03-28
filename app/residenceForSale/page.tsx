"use client"
import React, { useState, useEffect } from 'react'
import ResidenceCard from '../../components/card/ResidenceCard'
import { ResidenceListProps } from '../../components/helpers/ResidenceList'


const residenceForSale = () => {
  const [searchResult, setSearchResult] = useState<ResidenceListProps[]>([]);

  useEffect(() => {
    const storedResult = localStorage.getItem("searchResult");
    if (storedResult) {
      setSearchResult(JSON.parse(storedResult));
    }
  }, []);
  /* const [search, setSearch] = useState<ResidenceListProps[]>([]);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchSearchResults = async () => {
    try {
      const response = await fetch("http://localhost:3333/estates/category", {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        method: "GET",
      });
      const result = await response.json();
      setSearch(result);
    } catch (error) {
      //handle fetch error
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, []); */
  
  return (
    <div className='bg-white text-gray-500'>
      <div className='p-2 my-10 border-b'>
        <h1 className='text-4xl font-semibold pb-4'>Residence for sale</h1>
          
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
  )
}

export default residenceForSale