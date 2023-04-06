'use client';
import { useState } from 'react';
import GetListOfAllResidence from '../components/searchBar/GetListOfAllResidence';
import SearchBar from '../components/searchBar/SearchBar';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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
  return (
    <div className="flex h-[100vh] w-[100vw] flex-1 flex-col items-center text-indigo-900">
      <div
        className="flex items-center h-full min-h-[600px] w-full max-w-[1200px] bg-cover bg-center bg-no-repeat lg:rounded-t-xl"
        style={{
          backgroundImage: `linear-gradient(to right,rgba(246,244,252, 0.7) 30%, rgba(255, 255, 255, 0.2) 100%), url(/houseParis2.jpg)`,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-80 p-4 pt-10 md:w-[50%] md:bg-transparent lg:w-[40%]">
          <div className="flex flex-col justify-center items-start mb-20 mx-6">
            <p className="text-3xl text-center font-semibold drop-shadow-2xl md:text-4xl md:font-bold">
              A New Home Awaits, <br /> Find It Now!
            </p>
            <p className="py-2 text-base font-semibold tracking-wider text-[#7d6af4]">
              Discover Exceptional Real Estate Opportunities Across the Nation.
            </p>
            <p>
              Welcome to Bolig, the premier destination for all your real estate
              needs.
            </p>
            <p>
              Browse through our exclusive listings, tailored to meet a wide
              range of preferences and budgets.
            </p>
          
          </div>

          <SearchBar />

          {/* <GetListOfAllResidence /> */}
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-[1200px] gap-4 text-white bg-[#f6f4fc] py-10 border">
        <p className="font-bold text-indigo-900 text-2xl pl-4 py-4">Newest Delas</p>
        <div className="flex justify-center items-center w-[80%] overflow-hidden gap-4 border">
          <button onClick={handlePrevSlide} className='bg-gradient-to-r from-[#7d6af5] to-[#9c4ecf] rounded-full p-2'>
            <AiOutlineArrowLeft className='text-white'/>
          </button>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-52 w-52 rounded-lg bg-blue-800 transition-all duration-500 ${
                index >= currentSlide && index < currentSlide + imagesToShow ? 'block' : 'hidden'
              }`}
            >
              {index + 1}
            </div>
          ))}
          <button onClick={handleNextSlide} disabled={currentSlide === totalSlides - imagesToShow} className='bg-gradient-to-r from-[#7d6af5] to-[#9c4ecf] rounded-full p-2' >
            <AiOutlineArrowRight className='text-white'/>
          </button>
        </div>
      </div>
    </div>
  );
}
