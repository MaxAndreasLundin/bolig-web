import React, { ChangeEvent, useState, useEffect } from "react";

interface TypeOfLivingProps {
  onTypeOfLivingSelected: (selectedHousing: string[]) => void;
}

const TypeOfLiving = ({ onTypeOfLivingSelected }: TypeOfLivingProps) => {
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

  const handlePetTypesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (checked) {
      setAllTypes(["townHouse", "house", "apartment"]); // If checked, set state to array of pet types
      setTypeOfLiving([])
    } else {
      setAllTypes([]); // If unchecked, reset state to empty array
    }

    console.log(allTypes)
  };

  // Use useEffect to monitor changes to the typeOfLiving state and send updated data to main component
  useEffect(() => {
    if (typeOfLiving.length > 0) {
      onTypeOfLivingSelected(typeOfLiving);
    } else {
      onTypeOfLivingSelected(allTypes);
    }
  }, [typeOfLiving, allTypes, onTypeOfLivingSelected]);

  return (
    <div>
      <label
        htmlFor="townHouse"
        className={`float-left w-20 hover:border ${
          typeOfLiving.includes("townHouse") ? "bg-green-500" : "bg-red-500"
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
        <span className="block p-2 text-center">Town House</span>
      </label>
      <label
        htmlFor="house"
        className={`float-left w-20 hover:border ${
          typeOfLiving.includes("house") ? "bg-green-500" : "bg-red-500"
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
        <span className="block p-2 text-center">House</span>
      </label>

      <label
        htmlFor="apartment"
        className={`float-left w-20 hover:border ${
          typeOfLiving.includes("apartment") ? "bg-green-500" : "bg-red-500"
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
        <span className="block p-2 text-center">Apartment</span>
      </label>

      <label
        htmlFor="allTypes"
        className={`float-left w-20 hover:border ${
          allTypes.length > 0 ? "bg-green-500" : "bg-red-500"
        }`}
        >
        <input
        type="checkbox"
        id="allTypes"
        name="allTypes"
        checked={allTypes.length > 0}
        onChange={handlePetTypesChange}
        className="absolute -top-6"
        />
        <span className="block p-2 text-center">Select All</span>
        </label>
    </div>
  );
};

export default TypeOfLiving;
