import React, { ChangeEvent, FormEvent, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { selectPrice } from '../searchBar/searchFormElement/SelectPrice';
import { selectNumbOfRooms } from '../searchBar/searchFormElement/SelectNumbOfRooms';
import { livingArea } from '../searchBar/searchFormElement/LivingArea';
import TypeOfResidence from '../searchBar/searchFormElement/TypeOfResidence';
import { fetchData } from '../../app/utils/api';
import { SearchDataProps } from '../../app/types/searchData';
import Image from 'next/image';

const SearchFormResidence = () => {
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

    if (room || area || price) {
      newSearch.room = {
        gte: 0,
        lte: room || area || price,
      };
    }
    console.log(newSearch);

    const result = await fetchData(
      `${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`,
      'POST',
      newSearch,
    );

    if (result && result.length > 0) {
      localStorage.setItem('searchResult', JSON.stringify(result));
      window.location.href = '/residenceForSale';
      console.log('result', result);
    } else {
      alert('Your search could not be found...');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-1 flex-col items-start justify-start bg-white_bolig"
    >
      <div className="relative h-[300px] w-full rounded-t-lg border bg-cover bg-center bg-no-repeat">
        <Image
          src="/search.jpg"
          layout="fill"
          objectFit="cover"
          alt="Search background"
        />
      </div>

      <div className="flex w-full flex-col p-4">
        <label htmlFor="location" className="py-2 font-semibold">
          Location
        </label>
        <div className="flex items-center">
          <GoSearch className="h-6 w-6" />
          <input
            type="text"
            id="location"
            onChange={handleSearchInput}
            placeholder="City"
            className="w-full border-0 border-b-2 bg-white_bolig placeholder:text-sm placeholder:font-semibold placeholder:tracking-widest placeholder:text-primary"
          />
        </div>

        <div className="pt-6">
          <TypeOfResidence onTypeOfResidence={handleTypeOfLiving} />
        </div>

        <p className="mb-2 pb-2 pt-4 font-semibold">Rooms</p>
        <select
          onChange={handleNumbOfRooms}
          className="mb-2 cursor-pointer rounded-md border-2 border-primary"
        >
          <option value="">All Rooms</option>
          {selectNumbOfRooms.map((data) => (
            <option key={data.id} value={data.value}>
              {data.view}
            </option>
          ))}
        </select>

        <div className="flex flex-col">
          <p className="mb-2 pb-2 pt-4 font-semibold">Living Area</p>
          <select
            onChange={handleLivingArea}
            className="mb-2 cursor-pointer rounded-md border-2 border-primary"
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
          <p className="mb-2 pb-2 pt-4 font-semibold">Higest Price</p>
          <select
            onChange={handleHighestPrice}
            className="mb-2 cursor-pointer rounded-md border-2 border-primary"
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
          className="my-6 flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-3 font-semibold text-white_bolig hover:bg-secondary_hover md:px-8"
        >
          Search <GoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchFormResidence;
