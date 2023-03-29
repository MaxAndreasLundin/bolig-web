import React, { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchForm from "./SearchForm";

export interface SearchDataProps {
  /* typeOfResidence: string[]; */
  title?: string;
  description?: string;
  link?: string;
  location?: string;
  typeOfResidence?: string;
  coordinates?: string;
  room: {
    gte: number;
    lte: number;
  };
  area: {
    gte: number;
    lte: number;
  };
  price: {
    gte: number;
    lte: number;
  };

  [key: string]: string | number | { gte?: number; lte?: number } | undefined;
}

const SearchBar = () => {
  const [searchLocationInput, setSearchLocationInput] = useState("");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
  };

  const getFormData = async (searchData: SearchDataProps) => {
    const EstateFilter = {
      ...searchData,
      location: searchLocationInput,
    };
    console.log("New Search:", EstateFilter);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to search for apartment");
      return;
    }
    try {
      const response = await fetch("http://localhost:3333/estates/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(EstateFilter),
      });

      const result = await response.json();

      if (result.length > 0) {
        localStorage.setItem("searchResult", JSON.stringify(result));
        window.location.href = "/residenceForSale";
        console.log("result", result);
      } else {
        alert("Your search could not be found...");
      }
    } catch (error) {
      alert("fetch backend failed");
      console.log("fetch backend failed", error);
    }
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
