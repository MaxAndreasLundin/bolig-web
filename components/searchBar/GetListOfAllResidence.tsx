import React from 'react';

const GetListOfAllResidence = () => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const fetchResidence = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to search for apartment');
      return;
    }
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates/category`, {
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
