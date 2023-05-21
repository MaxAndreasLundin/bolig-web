'use client';
import React, { useState, useEffect } from 'react';
import LogoutBtn from '../../components/logoutBtn/LogoutBtn';
import { useRouter } from 'next/navigation';
import CreateEstate from '../../components/createEstate/CreateEstate';

const UserDashboard = () => {
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsPasswordChecked(false);
      router.replace('/');
    } else {
      setIsPasswordChecked(true);
    }
  }, [router]);

  if (!isPasswordChecked) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isPasswordChecked && <div className='flex h-[100vh] w-[100vw] flex-1 justify-center text-primary'>
        <div className='flex w-full max-w-[1400px] flex-col justify-center bg-white_bolig p-10'>
          <div className='flex items-center justify-between'>
            <h1 className='font-bold text-xl'>User Dashboard</h1>
            <LogoutBtn />
          </div>
          <div className='flex flex-col justify-center items-center'>
          <h2 className='font-semibold text-third p-6 text-xl'>Create Estate</h2>
            <CreateEstate />
          </div>
        </div>
      </div>}
    </>
  );
};

export default UserDashboard;
