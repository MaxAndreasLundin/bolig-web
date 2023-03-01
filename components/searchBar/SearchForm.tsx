import React, { FormEvent, useState } from "react";
import HighestPrice from "./searchFormElement/HighestPrice";
import LivingArea from "./searchFormElement/LivingArea";
import NumbOfRooms from "./searchFormElement/NumbOfRooms";
import TypeOfLiving from "./searchFormElement/TypeOfLiving";
import { GoSearch } from "react-icons/go";

type SearchFormProps = {
  onSearchForm: (newSearch: {
    typeOfLiving: string[];
    numbOfRoom: string;
    livingArea: string;
    highestPrice: string;
  }) => void;
};

const SearchForm = (props: SearchFormProps) => {
  const [selectedTypesOfLiving, setSelectedTypesOfLiving] = useState<string[]>(
    []
  );
  const [numbOfRooms, setNumbOfRooms] = useState("15");
  const [livingArea, setLivingArea] = useState("900");
  const [highestPrice, setHighestPrice] = useState("20000000");

  /* const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }; */

  const handleTypeOfLiving = (selectedHousing: string[]) => {
    setSelectedTypesOfLiving(selectedHousing);
  };

  const handleNumbOfRooms = (typeOfRoom: string) => {
    setNumbOfRooms(typeOfRoom);
  };

  const handleLivingArea = (livingArea: string) => {
    setLivingArea(livingArea);
  };

  const handleHighestPrice = (highestPrice: string) => {
    setHighestPrice(highestPrice);
  };

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
    <form
      onSubmit={onSubmit}
      className="flex flex-col rounded-2xl bg-blue-50 text-gray-600"
    >
      <div className="">
        <TypeOfLiving onTypeOfLivingSelected={handleTypeOfLiving} />
      </div>
      <div className="border-b  pb-6 md:pb-8 mb-6 md:mb-8">
        <NumbOfRooms onSelectRooms={handleNumbOfRooms} />
        <LivingArea onLivingArea={handleLivingArea} />
        <HighestPrice onHighestPrice={handleHighestPrice} />
      </div>

      <div className="flex justify-center items-center gap-8 mb-4">
        <button className="border rounded-md py-2 px-4 md:px-10">Cancel</button>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-blue-900 p-2 md:px-8 text-white hover:bg-blue-800"
        >
          Search <GoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
