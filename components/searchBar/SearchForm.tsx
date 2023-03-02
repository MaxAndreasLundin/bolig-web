import React, { FormEvent, useState } from "react";
import HighestPrice from "./searchFormElement/HighestPrice";
import LivingArea from "./searchFormElement/LivingArea";
import NumbOfRooms from "./searchFormElement/NumbOfRooms";
import TypeOfResidence from "./searchFormElement/TypeOfResidence";
import { GoSearch } from "react-icons/go";
import { SearchDataProps } from "./SearchBar";

interface SearchFormProps {
  onSearchForm: (newSearch: SearchDataProps) => void;
}

const SearchForm = ({ onSearchForm }: SearchFormProps) => {
  const [typeOfResidence, setTypeOfResidence] = useState<string[]>([]);
  const [room, setRoom] = useState(15);
  const [area, setArea] = useState(250);
  const [price, setPrice] = useState(20000000);

  const handleTypeOfLiving = (selectedHousing: string[]) => {
    setTypeOfResidence(selectedHousing);
  };

  const handleNumbOfRooms = (typeOfRoom: number) => {
    setRoom(typeOfRoom);
  };

  const handleLivingArea = (livingArea: number) => {
    setArea(livingArea);
  };

  const handleHighestPrice = (highestPrice: number) => {
    setPrice(highestPrice);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSearch = {
      typeOfResidence,
      room,
      area,
      price,
    };
    onSearchForm(newSearch);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col rounded-2xl bg-blue-50 pt-6 text-gray-600 lg:w-[80%]"
    >
      <div className="">
        <TypeOfResidence onTypeOfResidence={handleTypeOfLiving} />
      </div>
      <div className="mb-6  border-b pb-6 md:mb-8 md:pb-8 lg:w-[40%]">
        <NumbOfRooms onSelectRooms={handleNumbOfRooms} />
        <LivingArea onLivingArea={handleLivingArea} />
        <HighestPrice onHighestPrice={handleHighestPrice} />
      </div>

      <div className="mb-4 flex items-center justify-center gap-8">
        <button className="rounded-md border py-2 px-4 md:px-10">Cancel</button>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-blue-900 p-2 text-white hover:bg-blue-800 md:px-8"
        >
          Search <GoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
