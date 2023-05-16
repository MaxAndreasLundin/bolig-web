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
        {isPasswordChecked && <div>
          <h1>User Dashboard</h1>
          <LogoutBtn />
          <h1>test</h1>
          <CreateEstate />
        </div>}
    </>
  );
};

export default UserDashboard;
