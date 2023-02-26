import React, { ChangeEvent, FormEvent, useState } from "react";
import LivingArea from "./searchFormElement/LivingArea";
import NumbOfRooms from "./searchFormElement/NumbOfRooms";
import TypeOfLiving from "./searchFormElement/TypeOfLiving";

type SearchFormProps = {
  onSearchForm: (newSearch: { search: string; typeOfLiving: string[], numbOfRoom: string, livingArea: string }) => void;
};

const SearchForm = (props: SearchFormProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTypesOfLiving, setSelectedTypesOfLiving] = useState<string[]>([]);
  const [numbOfRooms, setNumbOfRooms] = useState("1");
  const [livingArea, setLivingArea] = useState("20");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleTypeOfLiving = (selectedHousing: string[]) => {
    setSelectedTypesOfLiving(selectedHousing);
  }

  const handleNumbOfRooms = (typeOfRoom: string) => {
    setNumbOfRooms(typeOfRoom)
  }

  const handleLivingArea = (livingArea: string) => {
    setLivingArea(livingArea)
  }


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSearch = {
      search: searchInput,
      typeOfLiving: selectedTypesOfLiving,
      numbOfRoom: numbOfRooms,
      livingArea: livingArea,
    };
    props.onSearchForm(newSearch);
  };

  return (
    <form onSubmit={onSubmit} className="text-gray-600">
      <input type="text" onChange={handleInput} />

      <div className="float-left m-1 overflow-auto border">
      
        <TypeOfLiving onTypeOfLivingSelected={handleTypeOfLiving} />

        <NumbOfRooms onSelectRooms={handleNumbOfRooms} />

        <LivingArea onLivingArea={handleLivingArea} />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
