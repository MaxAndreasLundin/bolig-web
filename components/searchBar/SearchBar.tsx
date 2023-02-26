import React, { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchForm from "./SearchForm";

interface SearchDataProps {
  search: string,
  typeOfLiving: string[],
  numbOfRoom: string
  livingArea: string
}

const SearchBar = () => {
  const [searchLocationInput, setSearchLocationInput] = useState("");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
  };
  
  const getFormData = (searchData: SearchDataProps) => {
    const newSearch2 = {
      ...searchData,
      address: searchLocationInput,
    };
    console.log("Form Data:", newSearch2);
    console.log("Handelform:", getFormData);
  };
  

  return (
    <div className="flex w-full flex-col items-center justify-center border">
      <div className="flex w-[70%] items-center rounded-full bg-white px-4 py-2">
        <input
          type="text"
          value={searchLocationInput}
          onChange={handleSearchInput}
          placeholder="Search your new home..."
          className="flex-grow border-none border-white bg-transparent pl-5 text-gray-600 outline-0"
        />
        <GoSearch className="text-2xl text-gray-600" />
      </div>

      {searchLocationInput && <SearchForm onSearchForm={getFormData} />}
    </div>
  );
};

export default SearchBar;
