import React, { ChangeEvent, FormEvent, useState } from 'react'
import { GoSearch } from 'react-icons/go';
import { selectPrice } from '../searchBar/searchFormElement/SelectPrice';
import { selectNumbOfRooms } from '../searchBar/searchFormElement/SelectNumbOfRooms'; 
import { livingArea } from '../searchBar/searchFormElement/LivingArea'; 
import { SearchDataProps } from '../searchBar/SearchBar';

const SearchFormResicence = () => {
  const [searchLocationInput, setSearchLocationInput] = useState('');
  const [room, setRoom] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSearch: Partial<SearchDataProps> = {};

    newSearch.location = searchLocationInput;

    if (room) {
      newSearch.room = {
        gte: 0,
        lte: room,
      };
    }

    if (area) {
      newSearch.area = {
        gte: 0,
        lte: area,
      };
    }

    if (price) {
      newSearch.price = {
        gte: 0,
        lte: price,
      };
    }

    console.log(newSearch)

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
        body: JSON.stringify(newSearch),
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
  }

  


  return (
    <form onSubmit={handleSubmit}
    className='flex flex-1 flex-col justify-start items-start h-full border border-green-500'>
      <div className='border h-[30%] w-full'>image</div>

      <label htmlFor="location">Location</label>
      <input type="text" id='location' onChange={handleSearchInput} />
      

      <div className="flex flex-col">
          <p className="mb-2 font-semibold">Rooms</p>
          <select
            onChange={handleNumbOfRooms}
            className="mb-2 cursor-pointer rounded-lg border-2 border-indigo-800"
          >
            <option value="">All Rooms</option>
            {selectNumbOfRooms.map((data) => (
              <option key={data.id} value={data.value}>
                {data.view}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 font-semibold">Living Area</p>
          <select
            onChange={handleLivingArea}
            className="cursor-pointer rounded-lg border-2 border-indigo-800"
          >
            <option value="">Select All</option>
            {livingArea.map((data) => (
              <option key={data.id} value={data.value}>
                {data.view}
              </option>
            ))}
          </select>
        </div>

        <div className="mx-2 mb-6 flex flex-col border-b-2 border-indigo-900 pb-10 md:mb-8 xl:flex-row md:justify-between">
          <div className="flex flex-col">
            <p className="mb-2 font-semibold">Higest Price</p>
            <select
              onChange={handleHighestPrice}
              className="mb-2 cursor-pointer rounded-lg border-2 border-indigo-800"
            >
              <option value="">Select All</option>
              {selectPrice.map((data) => (
                <option key={data.id} value={data.value}>
                  {data.view} kr
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-indigo-900 py-2 px-4 text-white hover:bg-indigo-800 md:px-8"
        >
          Search <GoSearch />
        </button>

    </form>
  )
}

export default SearchFormResicence