"use client"
import React, { useEffect } from 'react';
import LogoutBtn from '../../components/logoutBtn/LogoutBtn';
//import { useRouter } from 'next/router';

const UserDashboard = () => {
  //const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to a login page or display an error message
      /* router.push('/login'); */
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <LogoutBtn />
    </div>
  );
};

export default UserDashboard;
