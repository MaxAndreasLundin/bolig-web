import React, { useEffect, useState } from 'react';
import { NewestDealsList } from '../helpers/NewestDealsList';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import Image from 'next/image';

const NewestDeals = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const handlePrevClick = () => {
    if (scrollPos > 0) {
      setScrollPos(scrollPos - 1);
    }
  };

  const handleNextClick = () => {
    if (scrollPos < NewestDealsList.length - itemsPerPage) {
      setScrollPos(scrollPos + 1);
    }
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(
        window.innerWidth >= 768 ? (window.innerWidth >= 1024 ? 3 : 2) : 1,
      );
    };
    window.addEventListener('resize', updateItemsPerPage);
    updateItemsPerPage();
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  return (
    <div className="grid w-full max-w-[1200px] grid-cols-[50px_auto_auto_50px] bg-[#EDECE9] px-6 py-2 shadow-sm md:grid-cols-[50px_auto_auto_50px] lg:rounded-xl">
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrevClick}
          className="rounded-full bg-third p-2 text-white_bolig hover:scale-105 hover:bg-third_hover"
        >
          <MdOutlineArrowBackIos className="text-3xl" />
        </button>
      </div>

      <div className="col-span-2 flex min-h-[425px] w-full justify-center gap-4 p-4">
        {NewestDealsList.slice(scrollPos, scrollPos + itemsPerPage).map(
          (data, key) => (
            <div
              key={key}
              className="w-[300px] rounded-xl bg-white_bolig shadow-lg duration-500 hover:scale-105 hover:cursor-pointer"
            >
              <div className="relative h-[250px] w-full overflow-hidden rounded-t-xl">
                <Image
                  src={data.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  alt="test"
                />
                <div style={{ position: 'relative' }}>
                  <p className="absolute bottom-0 z-10 rounded-tr-md bg-primary px-4 py-1 text-lg font-semibold tracking-wider text-third">
                    Bolig
                  </p>
                </div>
              </div>
              <div className="p-2">
                <p className="text-lg">{data.title}</p>
                <p>{data.description}</p>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={handleNextClick}
          className="rounded-full bg-third p-2 text-white_bolig hover:scale-105 hover:bg-third_hover"
        >
          <MdOutlineArrowForwardIos className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default NewestDeals;
