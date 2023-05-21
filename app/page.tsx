'use client';

import { useSearch } from '../context/SearchContext';
import CityCard from '../components/card/CityCard';
import './globals.css';
import { fetchData } from '../utils/api';
import { SearchDataProps } from '../types/searchData';
import NewestDeals from '../components/newestDeals/NewestDeals';
import BuyersGuide from '../components/buyersGuide/BuyersGuide';
import { GoHome } from 'react-icons/go';
import CombinedSearchComponent from '../components/searchBar/CombinedSearchComponent';

export default function Home() {
  const { setSearchResult } = useSearch();

  const selectCity = async (location: SearchDataProps) => {
    console.log('New Search', location);

    const result = await fetchData(`${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`, 'POST', location);

    if (result && result.length > 0) {
      console.log('result', result);
      setSearchResult(result);
    } else {
      alert('Your search could not be found...');
    }
  };



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
            <CombinedSearchComponent />
          </div>

          {/* <GetListOfAllResidence />  */}
        </div>
      </div>

      {/* Newest Deals */}
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-4 py-10">
        <p className="pt-4 pl-4 text-3xl font-bold text-primary">
          Newest Deals
        </p>
        <div className='flex justify-center items-center m-4 w-full'>
          <NewestDeals />
        </div>

        <div className='w-full max-w-[1000px] py-20 px-10 lg:px-0'>
          <p className='flex justify-center items-center gap-2 text-lg text-primary tracking-wide py-1'>Say goodbye to the house-hunting hassle! <GoHome className='text-third text-2xl' /> </p> 
          <p className='text-center text-lg text-primary tracking-wide'>Our website is your secret weapon to finding your dream home. With a user-friendly interface and a vast selection of homes, we will make your search feel like a walk in the park. Get ready to unlock the door to your new adventure!</p>
        </div>

        {/*Explore your favorit city*/}
        <div className="flex h-full w-full flex-col items-center bg-white_bolig px-10 pb-10 xl:rounded-2xl">
          <h3 className="pt-4 pb-14 text-3xl font-bold text-primary sm:pb-10">
            Explore Your favorit City
          </h3>
          <div className="grid h-full w-full grid-cols-1 gap-2 rounded-xl bg-[#EDECE9] p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CityCard onCity={selectCity}/>
          </div>
        </div>

        <div className='flex flex-col px-10 max-w-[1000px] w-full'>
          <BuyersGuide />
        </div>

      </div>
    </div>
  );
}
