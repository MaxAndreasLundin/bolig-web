'use client';
import GetListOfAllResidence from '../components/searchBar/GetListOfAllResidence';
import SearchBar from '../components/searchBar/SearchBar';

export default function Home() {
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

      <div className="flex flex-1 flex-col w-full max-w-[1200px] gap-4 text-white bg-[#f6f4fc] border">
        <p className="font-semibold text-indigo-900">newest Delas</p>
        <div className="flex gap-4">
          <div className="h-52 w-52 rounded-lg bg-blue-800">1</div>
          <div className="h-52 w-52 rounded-lg bg-blue-800">2</div>
          <div className="h-52 w-52 rounded-lg bg-blue-800">3</div>
          <div className="h-52 w-52 rounded-lg bg-blue-800">4</div>
        </div>
      </div>
    </div>
  );
}
