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

    const result = await fetchData(
      `${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`,
      'POST',
      location,
    );

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
            <h1 className="py-2 text-2xl font-semibold tracking-wider text-third md:py-1">
              Bolig
            </h1>
            <p className="pb-2 text-3xl font-semibold drop-shadow-2xl md:text-4xl md:font-bold">
              A New Home Awaits, <br /> Find It Now!
            </p>
            <p className="pb-8 pt-2 text-base tracking-wider text-primary">
              Welcome to Bolig, the premier destination for all your real estate
              needs. Discover Exceptional Real Estate Opportunities Across the
              Nation.
            </p>
            <CombinedSearchComponent />
          </div>
        </div>
      </div>

      {/* Newest Deals */}
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-4 py-10">
        <p className="pl-4 pt-4 text-3xl font-bold text-primary">
          Newest Deals
        </p>
        <div className="m-4 flex w-full items-center justify-center">
          <NewestDeals />
        </div>

        <div className="w-full max-w-[1000px] px-10 py-20 lg:px-0">
          <p className="flex items-center justify-center gap-2 py-1 text-lg tracking-wide text-primary">
            Say goodbye to the house-hunting hassle!{' '}
            <GoHome className="text-2xl text-third" />
          </p>
          <p className="text-center text-lg tracking-wide text-primary">
            Our website is your secret weapon to finding your dream home. With a
            user-friendly interface and a vast selection of homes, we will make
            your search feel like a walk in the park. Get ready to unlock the
            door to your new adventure!
          </p>
        </div>

        {/*Explore your favorite city*/}
        <div className="flex h-full w-full flex-col items-center bg-white_bolig px-10 pb-10 xl:rounded-2xl">
          <h3 className="pb-14 pt-4 text-3xl font-bold text-primary sm:pb-10">
            Explore Your favorite City
          </h3>
          <div className="grid h-full w-full grid-cols-1 gap-2 rounded-xl bg-[#EDECE9] p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CityCard onCity={selectCity} />
          </div>
        </div>

        <div className="flex w-full max-w-[1000px] flex-col px-10">
          <BuyersGuide />
        </div>
      </div>
    </div>
  );
}
