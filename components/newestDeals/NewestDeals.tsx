import React, { useEffect, useState } from 'react'
import { NewestDealsList } from '../helpers/NewestDealsList';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import Image from 'next/image';

const NewestDeals = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const handlePrevClick = () => {
    if (scrollPos > 0) {
      setScrollPos(scrollPos - 1);
    }
  }
  
  const handleNextClick = () => {
    if (scrollPos < NewestDealsList.length - itemsPerPage) {
      setScrollPos(scrollPos + 1);
    }
  }

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? (window.innerWidth >= 1024 ? 3 : 2) : 1);
    };
    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <div className='grid grid-cols-[50px_auto_auto_50px] md:grid-cols-[50px_auto_auto_50px] lg:rounded-xl w-full max-w-[1200px] bg-[#EDECE9] py-2 px-6 shadow-sm'>
      <div className='flex justify-center items-center'>
        <button onClick={handlePrevClick} className='rounded-full bg-third p-2 text-white_bolig hover:bg-third_hover hover:scale-105'>
          <MdOutlineArrowBackIos className='text-3xl' />
        </button>
      </div>

      <div className='col-span-2 flex justify-center gap-4 p-4 min-h-[425px] w-full'>
        {NewestDealsList.slice(scrollPos, scrollPos + itemsPerPage).map((data, key) => (
          <div key={key} className='rounded-xl w-[300px] duration-500 hover:scale-105 hover:cursor-pointer bg-white_bolig shadow-lg'>
            <div className='w-full h-[250px] relative overflow-hidden rounded-t-xl'>
              <Image src={data.image} fill style={{ objectFit: 'cover' }} alt='test' />
              <div style={{position: "relative"}}>
                <p className='absolute z-10 bottom-0 py-1 px-4 rounded-tr-md font-semibold bg-primary text-lg text-third tracking-wider'>Bolig</p>
              </div>
            </div>
            <div className='p-2'>
              <p className='text-lg'>{data.title}</p>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className='flex justify-center items-center'>
        <button onClick={handleNextClick} className='rounded-full bg-third hover:bg-third_hover hover:scale-105 p-2 text-white_bolig'>
          <MdOutlineArrowForwardIos className='text-3xl' />
        </button>
      </div>
    </div>
  )
}

export default NewestDeals