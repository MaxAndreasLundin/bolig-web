import React, { ChangeEvent, FormEvent, useState } from "react";
import HighestPrice from "./searchFormElement/HighestPrice";
import LivingArea from "./searchFormElement/LivingArea";
import NumbOfRooms from "./searchFormElement/NumbOfRooms";
import TypeOfLiving from "./searchFormElement/TypeOfLiving";

type SearchFormProps = {
  onSearchForm: (newSearch: { typeOfLiving: string[], numbOfRoom: string, livingArea: string, highestPrice: string }) => void;
};

const SearchForm = (props: SearchFormProps) => {
  const [selectedTypesOfLiving, setSelectedTypesOfLiving] = useState<string[]>([]);
  const [numbOfRooms, setNumbOfRooms] = useState("15");
  const [livingArea, setLivingArea] = useState("900");
  const [highestPrice, setHighestPrice] = useState("20000000");

  /* const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }; */

  const handleTypeOfLiving = (selectedHousing: string[]) => {
    setSelectedTypesOfLiving(selectedHousing);
  }

  const handleNumbOfRooms = (typeOfRoom: string) => {
    setNumbOfRooms(typeOfRoom)
  }

  const handleLivingArea = (livingArea: string) => {
    setLivingArea(livingArea)
  }

  const handleHighestPrice = (highestPrice: string) => {
    setHighestPrice(highestPrice)
  }


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSearch = {
      typeOfLiving: selectedTypesOfLiving,
      numbOfRoom: numbOfRooms,
      livingArea: livingArea,
      highestPrice: highestPrice,
    };
    props.onSearchForm(newSearch);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white flex flex-col w-full grid-rows-3 rounded-2xl text-gray-600">

      <div className="">
      
        <TypeOfLiving onTypeOfLivingSelected={handleTypeOfLiving} />

      </div>
      <div>
        <NumbOfRooms onSelectRooms={handleNumbOfRooms} />
        <LivingArea onLivingArea={handleLivingArea} />
        <HighestPrice onHighestPrice={handleHighestPrice} />

      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
