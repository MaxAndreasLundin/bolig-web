import React, { ChangeEvent, FormEvent, useState } from "react";
import SelectForm from "./searchFormElement/SelectForm";
import TypeOfLiving from "./searchFormElement/TypeOfLiving";

type SearchFormProps = {
  onSearchForm: (newSearch: { search: string; typeOfLiving: string[], numbOfRoom: string }) => void;
};

const SearchForm = (props: SearchFormProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTypesOfLiving, setSelectedTypesOfLiving] = useState<string[]>([]);
  const [numbOfRooms, setNumbOfRooms] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleTypeOfLiving = (selectedHousing: string[]) => {
    setSelectedTypesOfLiving(selectedHousing);
  }


  const HandleSelect = (room: string) => {
    setNumbOfRooms(room)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSearch = {
      search: searchInput,
      typeOfLiving: selectedTypesOfLiving,
      numbOfRoom: numbOfRooms,
    };
    props.onSearchForm(newSearch);
  };

  return (
    <form onSubmit={onSubmit} className="text-gray-600">
      <input type="text" onChange={handleInput} />

      <div className="float-left m-1 overflow-auto border">
      
        <TypeOfLiving onTypeOfLivingSelected={handleTypeOfLiving} />

        <SelectForm onSelectForm={HandleSelect} />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
