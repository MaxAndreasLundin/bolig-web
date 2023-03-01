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
  const [searchLocationInput, setSearchLocationInput] = useState("");

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

      <div className="flex items-center justify-center border-2 border-blue-900 rounded-full md:shadow-sm bg-white">
        <input
          type="text"
          value={searchLocationInput}
          onChange={handleSearchInput}
          placeholder="Search your new home..."
          className="flex-grow bg-transparent rounded-2xl p-2  border-none sm:px-6 outline-none text-sm sm:text-base text-gray-600 placeholder:text-xs placeholder:sm:text-base"
        />
        <div className="bg-blue-900 rounded-full md:mx-2 w-full">
          <GoSearch className="hidden md:flex justify-center items-center p-1 m-1 text-2xl text-white h-6 w-6 " />
        </div>
      </div>

      {searchLocationInput && <SearchForm onSearchForm={getFormData} />}
    </div>
  );
};

export default SearchBar;
