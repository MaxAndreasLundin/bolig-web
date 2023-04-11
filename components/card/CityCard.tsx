import React from 'react';
import { ListOfCities } from '../helpers/ListOfCities';
import { SearchDataProps } from '../searchBar/SearchBar';
import { fetchData } from '../../app/utils/api';

const handleCityClick = async (cityName: string) => {
  const newSearch: Partial<SearchDataProps> = {};

  newSearch.location = cityName;
  const result = await fetchData(
    'http://localhost:3333/estates/category',
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

const CityCard = () => {
  return (
    <>
      {ListOfCities.map((city) => (
        <div
          key={city.id}
          onClick={() => handleCityClick(city.name)}
          className={`h-[220px] rounded bg-cover bg-center bg-no-repeat hover:cursor-pointer hover:opacity-80 ${
            city.id === 1 ? 'lg:col-span-2' : ''
          } ${city.id === 2 ? 'lg:row-span-2 lg:h-[448px]' : ''}`}
          style={{
            backgroundImage: `url(${city.img})`,
          }}
        >
          <div className="flex h-full flex-col justify-end rounded p-4 font-semibold tracking-wider">
            <p className="text-white_bolig">{city.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CityCard;
