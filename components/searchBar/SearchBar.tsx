import React, { ChangeEvent, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import SearchForm from './SearchForm';

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
  const [searchLocationInput, setSearchLocationInput] = useState('');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
  };

  const getFormData = async (searchData: SearchDataProps) => {
    const EstateFilter = {
      ...searchData,
      location: searchLocationInput,
    };
    console.log('New Search:', EstateFilter);

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to search for apartment');
      return;
    }
    try {
      const response = await fetch('http://localhost:3333/estates/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(EstateFilter),
      });

      const result = await response.json();

      if (result.length > 0) {
        localStorage.setItem('searchResult', JSON.stringify(result));
        window.location.href = '/residenceForSale';
        console.log('result', result);
      } else {
        alert('Your search could not be found...');
      }
    } catch (error) {
      alert('fetch backend failed');
      console.log('fetch backend failed', error);
    }
  };

  const onCancel = () => {
    setSearchLocationInput("");
  }

  return (
    <div className="flex w-full sm:w-[80%] md:full xl:w-[90%] flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white lg:bg-opacity-90 md:shadow-md border-indigo-900 shadow-2xl">
        <div className="flex w-full items-center justify-center">
          <MdLocationOn className='h-8 w-8 text-indigo-900 ml-4'/>
          <input
            type="text"
            value={searchLocationInput}
            onChange={handleSearchInput}
            placeholder="Search location..."
            className="w-full flex-grow rounded-2xl border-none bg-transparent p-4 text-indigo-900 placeholder:font-semibold sm:px-6 sm:text-base placeholder:sm:text-base"
          />
          <div className="mr-4 flex h-full transform items-center justify-center rounded-full bg-indigo-900 duration-300 hover:scale-105 hover:cursor-pointer md:mx-2">
            <GoSearch className="m-1 flex h-6 w-6 items-center justify-center p-1 text-2xl text-white " />
          </div>
        </div>
          {searchLocationInput && 
          <SearchForm onCancel={onCancel} onSearchForm={getFormData} />
        }
      </div>
    </div>
  );
};

export default SearchBar;
