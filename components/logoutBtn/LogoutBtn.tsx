import Link from 'next/link';
import React from 'react';

const LogoutBtn = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Link href="/">
      <button
        onClick={handleLogout}
        className="hover:bg-neutral-700 h-10 w-20 rounded-md border-2 border-third bg-secondary text-white_bolig hover:scale-105 hover:cursor-pointer hover:bg-opacity-80"
      >
        Logout
      </button>
    </Link>
  );
};

export default LogoutBtn;
