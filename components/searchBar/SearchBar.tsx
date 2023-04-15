import React, { ChangeEvent, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import SearchForm from './SearchForm';
import { SearchDataProps } from '../../app/types/searchData';


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
      const response = await fetch('https://bolig-api.vercel.app/estates/category', {
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
    setSearchLocationInput('');
  };

  return (
    <div className="md:full flex w-full flex-col items-center justify-center sm:w-[80%] xl:w-[90%]">
      <div className="flex w-full flex-col items-center justify-center rounded-2xl border-primary bg-white_bolig shadow-2xl md:shadow-md">
        <div className="flex w-full items-center justify-center">
          <MdLocationOn className="ml-4 h-8 w-8 text-primary" />
          <input
            type="text"
            value={searchLocationInput}
            onChange={handleSearchInput}
            placeholder="Search location..."
            className="w-full flex-grow rounded-2xl border-none bg-white_bolig p-4 text-primary placeholder:font-semibold sm:px-6 sm:text-base placeholder:sm:text-base"
          />
          <div className="mr-4 flex h-full transform items-center justify-center rounded-full bg-primary duration-300 hover:scale-105 hover:cursor-pointer md:mx-2">
            <GoSearch className="m-1 flex h-6 w-6 items-center justify-center p-1 text-2xl text-white_bolig " />
          </div>
        </div>
        {searchLocationInput && (
          <SearchForm onCancel={onCancel} onSearchForm={getFormData} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
