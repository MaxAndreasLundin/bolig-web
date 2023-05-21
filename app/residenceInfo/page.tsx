'use client';
import React, { useEffect, useState } from 'react';
import { ResidenceListProps } from '../../components/helpers/ResidenceList';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsCalendar4Week, BsChevronCompactLeft, BsHouse } from 'react-icons/bs';
import CardSlider from '../../components/cardSlider/CardSlider';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBedroomParent } from 'react-icons/md';
import Link from 'next/link';

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
    <div className="flex h-full w-[100vw] max-w-[1400px] flex-1 flex-col pt-4">
      <div className="flex justify-between px-4 py-2">
        <Link href="/residenceForSale">
          <button className="flex  items-center justify-center rounded-md border-2 border-primary px-4 py-2 font-semibold shadow-lg        hover:bg-white_bolig_hover">
            <BsChevronCompactLeft />
            Back to List
          </button>
        </Link>
        <button onClick={() => setLikeBtn(!likeBtn)}>
          {likeBtn ? (
            <AiFillHeart className="h-6 w-6 text-third" />
          ) : (
            <AiOutlineHeart className="h-6 w-6" />
          )}
        </button>
      </div>
      <div>
        <CardSlider />
      </div>
      <div className="w-full max-w-[600x] px-4">
        {residence ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr,2fr]">
              <div className="my-4 font-semibold">
                <div className="flex gap-2 text-2xl">
                  <h1 className="">{residence.title},</h1>
                  <p>{residence.location}</p>
                </div>
                <p className="text-xl text-third">{residence.price} kr</p>
              </div>

              <div className="my-4 flex justify-between font-semibold md:justify-start md:gap-8">
                <div className="flex items-center justify-center gap-2">
                  <BsHouse />
                  <p>{residence.typeOfResidence}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MdOutlineBedroomParent />
                  <p>{residence.room} Room</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <BiArea />
                  <p>{residence.area} Sqft</p>
                </div>
              </div>

              <div className="flex gap-8 p-2 pt-4 md:col-start-2 md:row-span-2 md:row-start-1">
                <BsCalendar4Week className="h-10 w-10 " />
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold">
                      Viewing of apartment
                    </p>
                    <button onClick={() => setLikeBtn(!likeBtn)}>
                      {likeBtn ? (
                        <AiFillHeart className="h-6 w-6 text-third" />
                      ) : (
                        <AiOutlineHeart className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                  <p>Fri 23 may kl. 12-00 - 12.45</p>
                  <p>
                    Warmly welcome to our open house! <br />
                    Don&apos;t hesitate to register your interest - after all,
                    who could resist?
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xl font-semibold">Property Description</p>
                <p>{residence.description}</p>
              </div>
            </div>

            {/* Display other residence details */}
          </>
        ) : (
          <p>No residence selected.</p>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default ResidenceInfo;
