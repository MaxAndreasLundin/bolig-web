import React, { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchForm from "./SearchForm";

export interface SearchDataProps {
  typeOfResidence: string[];
  room: number;
  area: number;
  price: number;
}

const SearchBar = () => {
  const [searchLocationInput, setSearchLocationInput] = useState("");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
  };

  const getFormData = (searchData: SearchDataProps) => {
    const newSearch = {
      ...searchData,
      city: searchLocationInput,
    };

    console.log("New Search:", newSearch);
    /* localStorage.setItem("searchData", JSON.stringify(newSearch)) */
    window.location.href = "/residenceForSale"
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center rounded-full border-2 border-stone-600 bg-white md:w-[80%] md:shadow-md">
        <input
          type="text"
          value={searchLocationInput}
          onChange={handleSearchInput}
          placeholder="Search your new home..."
          className="flex-grow rounded-2xl border-none bg-transparent  p-2 text-sm text-gray-600 outline-none placeholder:text-xs sm:px-6 sm:text-base placeholder:sm:text-base"
        />
        <div className="rounded-full bg-sky-600 md:mx-2">
          <GoSearch className="m-1 hidden h-6 w-6 items-center justify-center p-1 text-2xl text-white md:flex " />
        </div>
      </div>

      {searchLocationInput && <SearchForm onSearchForm={getFormData} />}
    </div>
  );
};

export default SearchBar;
