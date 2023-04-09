import React from 'react'
import { ListOfCities } from '../helpers/ListOfCities'

const CityCard = () => {
  return (
    <>
      {ListOfCities.map((city) => (
        <div
        key={city.id}
        
        className={`bg-cover bg-center bg-no-repeat h-[220px] rounded hover:cursor-pointer hover:opacity-80 ${
          city.id === 1 ? "lg:col-span-2" : ""
        } ${city.id === 2 ? "lg:row-span-2 lg:h-[448px]" : ""}`}
        style={{
          backgroundImage: `url(${city.img})`,
        }}
      >
        <div className="p-4 h-full flex flex-col justify-end font-semibold tracking-wider rounded">
          <p className='text-white_bolig'>{city.name}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default CityCard