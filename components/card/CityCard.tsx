import React from 'react'
import { ListOfCities } from '../helpers/ListOfCities'

const CityCard = () => {
  return (
    <>
      {ListOfCities.map((city) => (
        <div
        key={city.id}
        className={`bg-cover bg-center bg-no-repeat h-full rounded ${
          city.id === 1 ? "col-span-2" : ""
        } ${city.id === 2 ? "row-span-2" : ""}`}
        style={{
          backgroundImage: `url(${city.img})`,
        }}
      >
        <div className="bg-gradient-to-b from-transparent to-black p-4 h-full flex flex-col justify-end rounded">
          <p>{city.name}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default CityCard