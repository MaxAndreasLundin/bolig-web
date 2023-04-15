import React from 'react';

const GetListOfAllResidence = () => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const fetchResidence = async () => {
    try {
      const response = await fetch('https://bolig-api.vercel.app/estates/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
        Whats for sale
      </button>
    </>
  );
};

export default GetListOfAllResidence;
