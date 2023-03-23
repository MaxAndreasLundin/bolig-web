"use client"
import React, { useState, useEffect } from 'react'
import ResidenceCard from '../../components/card/ResidenceCard'
import { ResidenceList } from '../../components/helpers/ResidenceList'


const residenceForSale = () => {
  
  const filterList = ResidenceList.filter((value) => {
    const result = localStorage.getItem("searchData")

    if(result) {
      const { city, price, room } = JSON.parse(result);

      if (price === 0 && room === 0) {
        return value.city.toLowerCase().includes(city.toLowerCase());
      } else if ( price === 0) {
        return value.city.toLowerCase().includes(city.toLowerCase()) &&
        value.room.toString().includes(room)  
      } else if ( room === 0) {
        return value.city.toLowerCase().includes(city.toLowerCase()) &&
        value.price.toString().includes(price)
      }
      return (
      value.city.toLowerCase().includes(city.toLowerCase()) &&
      value.price.toString().includes(price) &&
      value.room.toString().includes(room)
      )
    }
  })

  return (
    <div className='bg-white text-gray-500'>
      <div className='p-2 my-10 border-b'>
        <h1 className='text-4xl font-semibold pb-4'>Residence for sale</h1>
      </div>
      {filterList.map((resident) => {
        return (
          <div key={resident.id}>
            <ResidenceCard 
              id={resident.id}
              title={resident.title}
              city={resident.city}
              description={resident.description}
              typeOfResidence={resident.typeOfResidence}
              price={resident.price}
              room={resident.room}
              area={resident.area}
            />
          </div>
        )
      })}
    </div>
  )
}

export default residenceForSale