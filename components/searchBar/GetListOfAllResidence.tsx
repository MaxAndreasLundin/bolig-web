import React from 'react';
import Link from 'next/link';
import { useSearch } from '../../context/SearchContext';

const GetListOfAllResidence = () => {
  const { setSearchResult } = useSearch();

  const FetchResidence = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const result = await response.json();
      console.log('1', result);

      if (result.length > 0) {
        setSearchResult(result);
      } else {
        alert('Your search could not be found...');
      }
    } catch (error) {
      alert('fetch backend failed');
      console.log('fetch backend failed', error);
    }
  };

  return (
    <>
      <Link href="/residenceForSale">
        <button
          onClick={FetchResidence}
          className="rounded-xl bg-opacity-80 p-2 font-semibold text-white_bolig hover:scale-105"
        >
          Whats for sale
        </button>
      </Link>
    </>
  );
};

export default GetListOfAllResidence;
