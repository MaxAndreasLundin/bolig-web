'use client';
import GetListOfAllResidence from '../components/searchBar/GetListOfAllResidence';
import SearchBar from '../components/searchBar/SearchBar';

export default function Home() {
  return (
    <div className="flex h-[100vh] w-full max-w-[1200px] flex-1 flex-col items-center overflow-y-auto overflow-x-hidden text-white">
      <div
        className="h-[600px] w-full lg:rounded-xl border bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(/houseWinter.jpg)`,
        }}
      >

      <div className="flex flex-col items-center justify-center pt-10">
        <p className='text-lg font-semibold tracking-wider'>Explore Bolig Lorem, ipsum.</p>
        <p className="text-3xl font-semibold md:font-bold drop-shadow-2xl md:text-4xl mb-20">
          A New Home Awaits, Find It Now!
        </p>
        <SearchBar />

        {/* <GetListOfAllResidence /> */}
      </div>

      </div>
    </div>
  );
}
