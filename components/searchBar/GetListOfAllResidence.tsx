import React from 'react';

const GetListOfAllResidence = () => {

  const fetchResidence = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log('1', result);

      if (result.length > 0) {
        localStorage.setItem('searchResult', JSON.stringify(result));
        window.location.href = '/residenceForSale';
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
      <button
        onClick={fetchResidence}
        className="rounded-xl bg-opacity-80 p-2 font-semibold text-white_bolig hover:scale-105"
      >
        Whats For Sale
      </button>
    </>
  );
};

export default GetListOfAllResidence;
