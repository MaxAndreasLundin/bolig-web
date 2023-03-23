import React, { FormEvent, useState } from "react";
import TypeOfResidence from "./searchFormElement/TypeOfResidence";
import { GoSearch } from "react-icons/go";
import { SearchDataProps } from "./SearchBar";
import { selectPrice } from "./searchFormElement/SelectPrice";
import { selectNumbOfRooms } from "./searchFormElement/SelectNumbOfRooms";
import { livingArea } from "./searchFormElement/LivingArea";

interface SearchFormProps {
  onSearchForm: (newSearch: SearchDataProps) => void;
}

const SearchForm = ({ onSearchForm }: SearchFormProps) => {
  const [typeOfResidence, setTypeOfResidence] = useState<string[]>([]);
  const [room, setRoom] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);

  const handleTypeOfLiving = (selectedHousing: string[]) => {
    setTypeOfResidence(selectedHousing);
  };

  const handleNumbOfRooms = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoom(Number(e.target.value));
  };

  const handleLivingArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(Number(e.target.value));
  };

  const handleHighestPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
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
      className="flex w-full flex-col rounded-2xl bg-sky-50 pt-6 text-gray-600 lg:w-[80%]"
    >
      <div className="">
        <TypeOfResidence onTypeOfResidence={handleTypeOfLiving} />
      </div>
      <div className="mb-6  border-b pb-6 md:mb-8 md:pb-8 lg:w-[40%]">
        
        <select onChange={handleHighestPrice}>
          <option value="">Select</option>
          {selectPrice.map((data) => (
            <option key={data.id} value={data.value}>
              {data.view} kr
            </option>
          ))}
        </select>

        <select onChange={handleNumbOfRooms}>
          <option value="">Select</option>
          {selectNumbOfRooms.map((data) => (
            <option key={data.id} value={data.value}>{data.view}</option>
          ))}
        </select>

        <select onChange={handleLivingArea}>
          <option value="">Select</option>
          {livingArea.map((data) => (
            <option key={data.id} value={data.value}>{data.view}</option>
          ))}
        </select>

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
