'use client'
import React, { useEffect, useState } from 'react'
import { ResidenceListProps } from '../../components/helpers/ResidenceList';

const ResidenceInfo = () => {
  const [residence, setResidence] = useState<ResidenceListProps | null>(null);

  useEffect(() => {
    const storedResidence = localStorage.getItem('selectedResidence');
    if (storedResidence) {
      setResidence(JSON.parse(storedResidence));
    }
  }, []);


  return (
    <div>
      // display other details of the residence
      {residence ? (
        <>
          <h1>{residence.title}</h1>
          <p>{residence.location}</p>
          {/* Display other residence details */}
        </>
      ) : (
        <p>No residence selected.</p>
      )}
    </div>
  )
}

export default ResidenceInfo
