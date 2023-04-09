import React, { FormEvent, useState } from 'react';
import TypeOfResidence from './searchFormElement/TypeOfResidence';
import { GoSearch } from 'react-icons/go';
import { SearchDataProps } from './SearchBar';
import { selectPrice } from './searchFormElement/SelectPrice';
import { selectNumbOfRooms } from './searchFormElement/SelectNumbOfRooms';
import { livingArea } from './searchFormElement/LivingArea';

interface SearchFormProps {
  onSearchForm: (newSearch: SearchDataProps) => void;
  onCancel: () => void;
}

const SearchForm = ({ onCancel, onSearchForm }: SearchFormProps) => {
  const [typeOfResidence, setTypeOfResidence] = useState<string>('');
  const [room, setRoom] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    onSearchForm(newSearch as SearchDataProps);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col rounded-2xl pt-6 text-primary"
    >
      <div className="md:mb-8">
        <TypeOfResidence onTypeOfResidence={handleTypeOfLiving} />
      </div>

      <div className="mx-2 mb-6 flex flex-col border-b-2 border-primary pb-10 md:mb-8 md:justify-between xl:flex-row">
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
          className="rounded-md border border-primary py-2 px-6 hover:bg-white_bolig_hover md:px-10"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-third py-2 px-4 text-white_bolig hover:bg-third_hover md:px-8"
        >
          Search <GoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
