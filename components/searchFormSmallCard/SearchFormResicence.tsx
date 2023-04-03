import React, { ChangeEvent, FormEvent, useState } from 'react'
import { GoSearch } from 'react-icons/go';
import { selectPrice } from '../searchBar/searchFormElement/SelectPrice';
import { selectNumbOfRooms } from '../searchBar/searchFormElement/SelectNumbOfRooms'; 
import { livingArea } from '../searchBar/searchFormElement/LivingArea'; 
import { SearchDataProps } from '../searchBar/SearchBar';
import TypeOfResidence from '../searchBar/searchFormElement/TypeOfResidence';

const SearchFormResicence = () => {
  const [searchLocationInput, setSearchLocationInput] = useState('');
  const [typeOfResidence, setTypeOfResidence] = useState<string>('');
  const [room, setRoom] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocationInput(e.target.value);
  };

  const handleTypeOfLiving = (selectedHousing: string) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSearch: Partial<SearchDataProps> = {};

    newSearch.location = searchLocationInput;

    newSearch.typeOfResidence = typeOfResidence;


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
    className='flex flex-1 flex-col justify-start items-start h-full bg-gray-50'>
      <div style={{
        backgroundImage: `url(/search.jpg)`,
      }} className='border h-[30%] w-full bg-cover bg-center bg-no-repeat rounded-t-lg'></div>

      

      <div className="flex flex-col w-full p-4">
        
        <label htmlFor="location" className='font-semibold py-2'>Location</label>
        <div className='flex items-center'>
          <GoSearch className='h-6 w-6'/>
          <input type="text" id='location' onChange={handleSearchInput} placeholder='City' className='bg-transparent border-0 border-b-2 w-full placeholder:text-gray-500 placeholder:font-semibold placeholder:tracking-widest placeholder:text-sm'/>
        </div>
        
        <div className="pt-6">
          <TypeOfResidence onTypeOfResidence={handleTypeOfLiving} />
        </div>

        <p className="mb-2 font-semibold pt-4 pb-2">Rooms</p>
        <select
          onChange={handleNumbOfRooms}
          className="mb-2 cursor-pointer rounded-md border-2 border-indigo-800"
        >
          <option value="">All Rooms</option>
          {selectNumbOfRooms.map((data) => (
            <option key={data.id} value={data.value}>
              {data.view}
            </option>
          ))}
        </select>

        <div className="flex flex-col">
          <p className="mb-2 font-semibold pt-4 pb-2">Living Area</p>
          <select
            onChange={handleLivingArea}
            className="cursor-pointer rounded-md border-2 border-indigo-800"
            >
            <option value="">Select All</option>
            {livingArea.map((data) => (
              <option key={data.id} value={data.value}>
                {data.view}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 font-semibold pt-4 pb-2">Higest Price</p>
          <select
            onChange={handleHighestPrice}
            className="mb-2 cursor-pointer rounded-md border-2 border-indigo-800"
            >
            <option value="">Select All</option>
            {selectPrice.map((data) => (
              <option key={data.id} value={data.value}>
                {data.view} kr
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-indigo-900 py-3 px-4 my-6 text-white font-semibold hover:bg-indigo-800 md:px-8"
          >
          Search <GoSearch />
        </button>

      </div>
    </form>
  )
}

export default SearchFormResicence