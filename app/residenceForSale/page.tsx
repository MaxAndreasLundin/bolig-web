import React from 'react'
import ResidenceCard from '../../components/card/ResidenceCard'
import { ResidenceList } from '../../components/helpers/ResidenceList'

const residenceForSale = () => {
  return (
    <div className='bg-white text-gray-500'>
      <div className='p-2 my-10 border-b'>
        <h1 className='text-4xl font-semibold pb-4'>Residence for sale</h1>
      </div>
      {ResidenceList.map((resident) => {
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