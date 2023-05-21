import React, { ChangeEvent, FormEvent, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import TypeOfResidence from './searchFormElement/TypeOfResidence';
import { selectPrice } from './searchFormElement/SelectPrice';
import { selectNumbOfRooms } from './searchFormElement/SelectNumbOfRooms';
import { livingArea } from './searchFormElement/LivingArea';
import { SearchDataProps } from '../../types/searchData';
import { useSearch } from '../../context/SearchContext';
import { useRouter } from 'next/navigation';

const CombinedSearchComponent = () => {
  const [searchLocationInput, setSearchLocationInput] = useState('');
  const [typeOfResidence, setTypeOfResidence] = useState<string>('');
  const [room, setRoom] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);
  const { setSearchResult } = useSearch();
  const router = useRouter();

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSearch: Partial<SearchDataProps> = {};
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

    const EstateFilter = {
      ...newSearch,
      location: searchLocationInput,
    };
    console.log('New Search:', EstateFilter);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(EstateFilter),
        },
      );

      const result = await response.json();

      if (result.length > 0) {
        setSearchResult(result);
        console.log('result', result);
        router.push('/residenceForSale');
      } else {
        alert('Your search could not be found...');
      }
    } catch (error) {
      alert('fetch backend failed');
      console.log('fetch backend failed', error);
    }
  };

  const handleCancel = () => {
    setSearchLocationInput('');
  };

  return (
    <div className="md:full flex w-full flex-col items-center justify-center sm:w-[80%] xl:w-[90%]">
      <div className="flex w-full flex-col items-center justify-center rounded-2xl border-primary bg-white_bolig shadow-2xl md:shadow-md">
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col rounded-2xl text-primary"
        >
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
            <>
              <div className="md:mb-8">
                <TypeOfResidence onTypeOfResidence={handleTypeOfLiving} />
              </div>

              <div className="mx-2 mb-6 flex flex-col gap-1 border-b-2 border-primary pb-10 md:mb-8 md:justify-between xl:flex-row">
                <div className="flex flex-col">
                  <p className="mb-2 font-semibold">Higest Price</p>
                  <select
                    onChange={handleHighestPrice}
                    className="mb-2 cursor-pointer rounded-lg border-2 border-primary"
                  >
                    <option value="">Select All</option>
                    {selectPrice.map((data) => (
                      <option key={data.id} value={data.value}>
                        {data.view} kr
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <p className="mb-2 font-semibold">Rooms</p>
                  <select
                    onChange={handleNumbOfRooms}
                    className="mb-2 cursor-pointer rounded-lg border-2 border-primary"
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
                    className="cursor-pointer rounded-lg border-2 border-primary"
                  >
                    <option value="">Select All</option>
                    {livingArea.map((data) => (
                      <option key={data.id} value={data.value}>
                        {data.view}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-center gap-8">
                <button
                  onClick={handleCancel}
                  className="rounded-md border border-primary px-6 py-2 hover:bg-white_bolig_hover md:px-10"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-md bg-third px-4 py-2 text-white_bolig hover:bg-third_hover md:px-8"
                >
                  Search <GoSearch />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CombinedSearchComponent;
