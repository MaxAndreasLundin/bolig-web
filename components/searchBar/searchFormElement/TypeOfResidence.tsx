import React, { ChangeEvent, useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineLocationCity, MdDashboard } from "react-icons/md"
import { GiFamilyHouse } from "react-icons/gi"

interface TypeOfLivingProps {
  onTypeOfResidence: (selectedHousing: string[]) => void;
}

const TypeOfResidence = ({ onTypeOfResidence }: TypeOfLivingProps) => {
  const [typeOfLiving, setTypeOfLiving] = useState<string[]>([]);
  const [allTypes, setAllTypes] = useState<string[]>(["townHouse", "house", "apartment"]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    //Funktionen hämtar name- och checked-egenskaperna från target-egenskapen i händelseobjektet.
    //name-egenskapen innehåller namnet på kryssrutan och
    //checked är ett booleskt värde som anger om kryssrutan är markerad eller inte

    if (checked) {
      setTypeOfLiving((prevTypeOfLiving) => [...prevTypeOfLiving, name]);
      //Funktionen hämtar först det tidigare värdet på tillståndet med hjälp av prevTypeOfLiving-parametern och
      //lägger sedan till namnet på den nyvalda kryssrutan till arrayen med hjälp av spread-operatorn.
      //Detta skapar en ny array som innehåller alla tidigare valda bo typ samt den nyvalda.
      setAllTypes([])
    } else {
      setTypeOfLiving((prevTypeOfLivings) =>
        prevTypeOfLivings.filter((houseType) => houseType !== name)
      );
    }
    //Om kryssrutan inte är markerad tar funktionen bort namnet på den avmarkerade kryssrutan från tillståndsarrayen.
    //Den gör detta genom att anropa filter-metoden på arrayen med tidigare valda bo typ och
    //behåller alla element som inte är lika med namnet på den avmarkerade kryssrutan.
    //onSelectTypes(typeOfLiving); // Call the function to send the data to the main component
  };

  const handleAllTypesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (checked) {
      setAllTypes(["townHouse", "house", "apartment"]); // If checked, set state to array of pet types
      setTypeOfLiving([])
    } /* else {
      setAllTypes([]); // If unchecked, reset state to empty array
    } */

    console.log(allTypes)
  };

  // Use useEffect to monitor changes to the typeOfLiving state and send updated data to main component
  useEffect(() => {
    if (typeOfLiving.length > 0) {
      onTypeOfResidence(typeOfLiving);
    } else {
      onTypeOfResidence(allTypes);
    }
  }, [typeOfLiving, allTypes, onTypeOfResidence]);

  return (
    <div className="flex flex-col md:flex-row text-white py-4 gap-2">
      <label
        htmlFor="townHouse"
        className={`float-left w-full rounded-lg border-2 border-blue-900 hover:bg-blue-800 hover:text-white ${
          typeOfLiving.includes("townHouse") ? "bg-blue-900" : "bg-transparent text-black"
        }`}
      >
        <input
          type="checkbox"
          id="townHouse"
          name="townHouse"
          checked={typeOfLiving.includes("townHouse")} //kontrollerar om kryssrutan ska vara markerad eller inte
          onChange={handleCheckboxChange}
          className="absolute -top-6"
        />
        <div className="flex justify-center items-center">
          <GiFamilyHouse />
          <span className="block p-2 text-center">Town House</span>
        </div>
      </label>
      <label
        htmlFor="house"
        className={`float-left w-full rounded-lg border-2 border-blue-900 hover:bg-blue-800 hover:text-white ${
          typeOfLiving.includes("house") ? "bg-blue-900" : "bg-transparent text-black"
        }`}
      >
        <input
          type="checkbox"
          id="house"
          name="house"
          checked={typeOfLiving.includes("house")}
          onChange={handleCheckboxChange}
          className="absolute -top-6"
        />
        <div className="flex justify-center items-center">
          <GoHome />
          <span className="block p-2 text-center">House</span>
        </div>
      </label>

      <label
        htmlFor="apartment"
        className={`float-left w-full rounded-lg border-2 border-blue-900 hover:bg-blue-800 hover:text-white ${
          typeOfLiving.includes("apartment") ? "bg-blue-900" : "bg-transparent text-black"
        }`}
      >
        <input
          type="checkbox"
          id="apartment"
          name="apartment"
          checked={typeOfLiving.includes("apartment")}
          onChange={handleCheckboxChange}
          className="absolute -top-6"
        />
        <div className="flex justify-center items-center">
          <MdOutlineLocationCity />
          <span className="block p-2 text-center">Apartment</span>
        </div>
      </label>

      <label
        htmlFor="allTypes"
        className={`float-left w-full rounded-lg border-2 border-blue-900 hover:bg-blue-800 hover:text-white ${
          allTypes.length > 0 ? "bg-blue-900" : "bg-transparent text-black"
        }`}
        >
        <input
        type="checkbox"
        id="allTypes"
        name="allTypes"
        checked={allTypes.length > 0}
        onChange={handleAllTypesChange}
        className="absolute -top-6"
        />
        <div className="flex justify-center items-center">
          <MdDashboard />
          <span className="block p-2 text-center">Select All</span>
        </div>
        </label>
    </div>
  );
};

export default TypeOfResidence;