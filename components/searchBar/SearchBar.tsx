import React, { ChangeEvent, useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center border">
      <div className="flex w-[70%] items-center rounded-full bg-white px-4 py-2">
        <input
          type="text"
          placeholder="Search your new home..."
          onChange={handleSearchInput}
          className="flex-grow border-none border-white bg-transparent pl-5 text-gray-600 outline-0"
        />
        <GoSearch className="text-gray-600 text-2xl" />
      </div>

      {searchInput && (
        <div>
          <p>Hello</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
