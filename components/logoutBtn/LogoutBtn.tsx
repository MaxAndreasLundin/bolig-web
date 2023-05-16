import Link from 'next/link'
import React, { useState } from 'react'

const LogoutBtn = () => {

  const handleLogout = () => {    
    localStorage.removeItem('token');
  }

  return (
    <Link href="/">
      <button onClick={handleLogout} className="text-white_bolig hover:bg-neutral-700 mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer hover:bg-opacity-40 sm:w-20">Logout</button>
    </Link>
  )
}

export default LogoutBtn