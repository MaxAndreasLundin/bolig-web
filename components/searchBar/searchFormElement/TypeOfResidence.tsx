import React, { ChangeEvent, useState } from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineLocationCity, MdDashboard } from 'react-icons/md';
import { GiFamilyHouse } from 'react-icons/gi';

interface TypeOfLivingProps {
  onTypeOfResidence: (selectedHousing: string) => void;
}

const TypeOfResidence = ({ onTypeOfResidence }: TypeOfLivingProps) => {
  const [typeOfLiving, setTypeOfLiving] = useState<string>('');

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, checked } = e.target;

    if (checked) {
      setTypeOfLiving(name);
      console.log('TEST', typeOfLiving);
      onTypeOfResidence(name === 'allTypes' ? '' : name);
    } else {
      setTypeOfLiving('');
      onTypeOfResidence('');
    }
  };

  return (
    <div className="mx-2 flex flex-col justify-between gap-4 py-4">
      <div className="flex w-full gap-4">
        <label
          htmlFor="allTypes"
          className={`float-left flex w-full cursor-pointer justify-center rounded-lg py-2 hover:border-primary_hover hover:text-third md:h-14 ${
            typeOfLiving === ''
              ? 'bg-primary text-white_bolig'
              : 'bg-transparent border-2'
          }`}
        >
          <input
            type="checkbox"
            id="allTypes"
            name=""
            checked={typeOfLiving == 'AllTypes'}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <div className="flex items-center justify-center">
            <MdDashboard />
            <span className="block p-2 text-center">Select All</span>
          </div>
        </label>

        <label
          htmlFor="apartment"
          className={`float-left flex w-full cursor-pointer justify-center rounded-lg py-2 hover:border-primary_hover hover:text-third md:h-14 ${
            typeOfLiving === 'Apartment'
              ? 'bg-primary text-white_bolig'
              : 'bg-transparent border-2'
          }`}
        >
          <input
            type="checkbox"
            id="apartment"
            name="Apartment"
            checked={typeOfLiving === 'Apartment'}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <div className="flex items-center justify-center">
            <MdOutlineLocationCity />
            <span className="block p-2 text-center">Apartment</span>
          </div>
        </label>
      </div>

      <div className="flex w-full gap-4">
        <label
          htmlFor="townHouse"
          className={`float-left flex w-full cursor-pointer justify-center rounded-lg py-2 hover:border-primary_hover hover:text-third md:h-14 ${
            typeOfLiving === 'TownHouse'
              ? 'bg-primary text-white_bolig'
              : 'bg-transparent border-2'
          }`}
        >
          <input
            type="checkbox"
            id="townHouse"
            name="TownHouse"
            checked={typeOfLiving === 'TownHouse'} //kontrollerar om kryssrutan ska vara markerad eller inte
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <div className="flex items-center justify-center">
            <GiFamilyHouse />
            <span className="block p-2 text-center">Town House</span>
          </div>
        </label>

        <label
          htmlFor="house"
          className={`float-left flex w-full cursor-pointer justify-center rounded-lg py-2 hover:border-primary_hover hover:text-third md:h-14 ${
            typeOfLiving === 'House'
              ? 'bg-primary text-white_bolig'
              : 'bg-transparent border-2'
          }`}
        >
          <input
            type="checkbox"
            id="house"
            name="House"
            checked={typeOfLiving === 'House'}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <div className="flex items-center justify-center">
            <GoHome />
            <span className="block p-2 text-center">House</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default TypeOfResidence;
