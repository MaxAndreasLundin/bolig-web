'use client';
import React, { useEffect, useState } from 'react';
import { ResidenceListProps } from '../../components/helpers/ResidenceList';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsChevronCompactLeft } from 'react-icons/bs';

const ResidenceInfo = () => {
  const [residence, setResidence] = useState<ResidenceListProps | null>(null);
  const [likeBtn, setLikeBtn] = useState(false);

  useEffect(() => {
    const storedResidence = localStorage.getItem('selectedResidence');
    if (storedResidence) {
      setResidence(JSON.parse(storedResidence));
    }
  }, []);


  return (
    <div className="flex h-full w-[100vw] max-w-[1400px] flex-1 flex-col border-2">
      <div className="flex justify-between border py-2 px-4">
        <button className="flex  items-center justify-center rounded-md border border-primary py-2 px-4 font-semibold        hover:bg-white_bolig_hover">
          <BsChevronCompactLeft />
          Back to List
        </button>
        <button onClick={() => setLikeBtn(!likeBtn)}>
          {likeBtn ? (
            <AiFillHeart className="h-6 w-6 text-third" />
          ) : (
            <AiOutlineHeart className="h-6 w-6" />
          )}
        </button>
      </div>
      <div></div>
      <div></div>
      <div></div>
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
  );
};

export default ResidenceInfo;
