import React, { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchForm from "./SearchForm";

interface SearchDataProps {
  typeOfLiving: string[],
  numbOfRoom: string
  livingArea: string
  highestPrice: string
}

const SearchBar = () => {
  const [searchLocationInput, setSearchLocationInput] = useState("d");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
  };
  
  const getFormData = (searchData: SearchDataProps) => {
    const newSearch2 = {
      ...searchData,
      city: searchLocationInput,
    };
    console.log("Form Data:", newSearch2);
    console.log("Handelform:", getFormData);
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center border-none md:border-2 rounded-full md:shadow-sm bg-white">
        <input
          type="text"
          value={searchLocationInput}
          onChange={handleSearchInput}
          placeholder="Search your new home..."
          className="flex-grow bg-transparent border-2 border-blue-900 rounded-2xl p-2 sm:px-6 outline-none text-sm sm:text-base text-gray-600 placeholder:text-xs placeholder:sm:text-base"
        />
        <GoSearch className="hidden sm:flex justify-center items-center sm:mr-2 text-2xl text-gray-600" />
      </div>

      {searchLocationInput && <SearchForm onSearchForm={getFormData} />}
    </div>
  );
};

export default SearchBar;
