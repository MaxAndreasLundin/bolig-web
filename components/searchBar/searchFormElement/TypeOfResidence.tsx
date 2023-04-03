import React, { ChangeEvent, useState, useEffect } from 'react';
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
      console.log('TEST', typeOfLiving)
      onTypeOfResidence(name === 'allTypes' ? '' : name);
    } else {
      setTypeOfLiving('')
      onTypeOfResidence('')
    }
  };

  
  // Use useEffect to monitor changes to the typeOfLiving state and send updated data to main component


  return (
    <div className="mx-2 flex flex-col justify-between gap-4 py-4 text-white">
      <div className="flex gap-4 w-full">
        <label
          htmlFor="allTypes"
          className={`float-left flex justify-center w-full md:h-14 cursor-pointer rounded-lg border-2 border-indigo-900 py-2 hover:bg-indigo-800 hover:text-white ${
            typeOfLiving === ''
              ? 'bg-indigo-900'
              : 'bg-transparent text-indigo-900'
          }`}
        >
          <input
            type="checkbox"
            id="allTypes"
            name=""
            checked={typeOfLiving == "AllTypes"}
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
          className={`float-left flex justify-center w-full md:h-14 cursor-pointer rounded-lg border-2 border-indigo-900 py-2 hover:bg-indigo-800 hover:text-white ${
            typeOfLiving === "Apartment"
              ? 'bg-indigo-900'
              : 'bg-transparent text-indigo-900'
          }`}
        >
          <input
            type="checkbox"
            id="apartment"
            name="Apartment"
            checked={typeOfLiving === "Apartment"}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <div className="flex items-center justify-center">
            <MdOutlineLocationCity />
            <span className="block p-2 text-center">Apartment</span>
          </div>
        </label>
      </div>

      <div className="flex gap-4 w-full">
        <label
          htmlFor="townHouse"
          className={`float-left flex justify-center w-full md:h-14 cursor-pointer rounded-lg border-2 border-indigo-900 py-2 hover:bg-indigo-800 hover:text-white ${
            typeOfLiving === "TownHouse"
              ? 'bg-indigo-900'
              : 'bg-transparent text-indigo-900'
          }`}
        >
          <input
            type="checkbox"
            id="townHouse"
            name="TownHouse"
            checked={typeOfLiving === "TownHouse"} //kontrollerar om kryssrutan ska vara markerad eller inte
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
          className={`float-left flex justify-center w-full md:h-14 cursor-pointer rounded-lg border-2 border-indigo-900 py-2 hover:bg-indigo-800 hover:text-white ${
            typeOfLiving === "House"
              ? 'bg-indigo-900'
              : 'bg-transparent text-indigo-900'
          }`}
        >
          <input
            type="checkbox"
            id="house"
            name="House"
            checked={typeOfLiving === "House"}
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
