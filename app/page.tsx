'use client';
import { useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CityCard from '../components/card/CityCard';
import './globals.css';
import { fetchData } from './utils/api';
import { SearchDataProps } from './types/searchData';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  const imagesToShow = 4;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const selectCity = async (location: SearchDataProps) => {
    console.log('New Search',location)

    const result = await fetchData(`${process.env.NEST_BACKEND}/estates/category`, 'POST', location);

    if (result && result.length > 0) {
      localStorage.setItem('searchResult', JSON.stringify(result));
      window.location.href = '/residenceForSale';
      console.log('result', result);
    } else {
      alert('Your search could not be found...');
    }

  }

  return (
    <div className="flex h-[100vh] w-[100vw] flex-1 flex-col items-center text-primary">
      <div className="banner-img flex h-full min-h-[700px] w-full max-w-[1400px] items-center lg:rounded-t-xl">
        <div className="flex h-full min-h-[700px] w-full flex-col items-center bg-white_bolig bg-opacity-90 px-4 pt-10 md:w-[50%]  md:pt-10 lg:w-[40%] lg:bg-opacity-0">
          <div className="mx-6 flex flex-col items-start justify-center">
            <h1 className="py-2 md:py-1 text-2xl font-semibold tracking-wider text-third">
              Bolig
            </h1>
            <p className="pb-2 text-3xl font-semibold drop-shadow-2xl md:text-4xl md:font-bold">
              A New Home Awaits, <br /> Find It Now!
            </p>
            <p className="pt-2 pb-8 text-base tracking-wider text-primary">
              Welcome to Bolig, the premier destination for all your real estate
              needs. Discover Exceptional Real Estate Opportunities Across the
              Nation.
            </p>
            <SearchBar />
          </div>

          {/* <GetListOfAllResidence />  */}
        </div>
      </div>

      {/* Newest Deals */}
      <div className="bg- flex w-full max-w-[1400px] flex-col items-center gap-4 py-10 text-white_bolig">
        <p className="py-4 pl-4 text-2xl font-bold text-primary">
          Newest Deals
        </p>
        <div className="mb-10 flex w-[80%] items-center justify-center gap-4 overflow-hidden rounded-2xl border bg-[#EDECE9] p-3">
          <button
            onClick={handlePrevSlide}
            className="border-white rounded-full border-2 bg-primary p-2 text-primary"
          >
            <AiOutlineArrowLeft className="text-white_bolig" />
          </button>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-52 w-52 rounded-lg bg-[#ffffff] text-primary transition-all duration-500 ${
                index >= currentSlide && index < currentSlide + imagesToShow
                  ? 'block'
                  : 'hidden'
              }`}
            >
              {index + 1}
            </div>
          ))}
          <button
            onClick={handleNextSlide}
            disabled={currentSlide === totalSlides - imagesToShow}
            className="border-white rounded-full border-2 bg-primary p-2 text-primary"
          >
            <AiOutlineArrowRight className="text-white_bolig" />
          </button>
        </div>

        {/*Explore your favorit city*/}
        <div className="flex h-full w-full flex-col items-center bg-white_bolig px-10 pb-40 xl:rounded-2xl">
          <h3 className="pt-14 pb-14 text-3xl font-bold text-primary sm:pb-20">
            Explore Your favorit City
          </h3>
          <div className="grid h-full w-full grid-cols-1 gap-2 rounded-xl border bg-[#F5F5F5] p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CityCard onCity={selectCity}/>
          </div>
        </div>
      </div>
    </div>
  );
}
