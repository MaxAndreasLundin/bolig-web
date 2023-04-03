'use client';
import GetListOfAllResidence from '../components/searchBar/GetListOfAllResidence';
import SearchBar from '../components/searchBar/SearchBar';

export default function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] max-w-[1200px] flex-1 flex-col items-center text-indigo-900">
      <div
        className="h-[600px] w-full lg:rounded-xl border bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(/houseParis2.jpg)`,
        }}
      >

      <div className="h-full w-full md:w-[40%] flex flex-col items-start justify-center pt-10 p-4 bg-white bg-opacity-80 md:bg-transparent ">
        <div className='mb-20'>
          <p className="text-3xl font-semibold md:font-bold drop-shadow-2xl md:text-4xl">
            A New Home Awaits, <br/> Find It Now!
          </p>
          <p className='text-base font-semibold tracking-wider py-2'>Discover Exceptional Real Estate Opportunities Across the Nation.</p>
          <p>Welcome to Bolig, the premier destination for all your real estate needs.</p>
          <p>Browse through our exclusive listings, tailored to meet a wide range of preferences and budgets.</p>
        </div>
        <div className='w-full'>
          <SearchBar />
        </div>

        {/* <GetListOfAllResidence /> */}
      </div>

      </div>
    </div>
  );
}
