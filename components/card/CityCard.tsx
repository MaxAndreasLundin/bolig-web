import React from 'react';
import { ListOfCities } from '../helpers/ListOfCities';
import { SearchDataProps } from '../../app/types/searchData';

interface CityProps {
  onCity: (location: SearchDataProps) => void;
}

const CityCard = ({ onCity }: CityProps) => {
  const handleSelectCity = (location: SearchDataProps) => {
    onCity(location);
  };

  return (
    <>
      {ListOfCities.map((city) => (
        <div
          key={city.id}
          onClick={() => handleSelectCity({ location: city.name })}
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