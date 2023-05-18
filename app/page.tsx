'use client';
import SearchBar from '../components/searchBar/SearchBar';
import CityCard from '../components/card/CityCard';
import './globals.css';
import { fetchData } from './utils/api';
import { SearchDataProps } from './types/searchData';
import NewestDeals from '../components/newestDeals/NewestDeals';

export default function Home() {
  const selectCity = async (location: SearchDataProps) => {
    console.log('New Search',location)

    const result = await fetchData(`${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`, 'POST', location);

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
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-4 py-10">
        <p className="pt-4 pl-4 text-3xl font-bold text-primary">
          Newest Deals
        </p>
        <div className='flex justify-center items-center m-4 w-full'>
          <NewestDeals />
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
