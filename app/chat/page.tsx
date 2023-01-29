"use client"
import React, { useState } from 'react'
import FormChatLogin from '../../components/Chat/FormChatLogin'
import FormChatRegistration from '../../components/Chat/FormChatRegistration';

const page = () => {
  const [click, setClick] = useState<boolean>(true);

  const handleClick = () => {
    setClick(!click)
  }

  return (
      <div className='flex flex-1'>
        <div className='grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-1 w-full'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold'>Welcome,</h1>
            <p>Sign in or create an account to access this website.</p>
            <div className='flex justify-center items-center gap-1 mt-4'>
              <p>Click here to</p>
              <button onClick={handleClick} className="h-10 w-20 rounded-xl bg-orange-500 outline-none shadow-2xl hover:scale-105">{click! ? "Register" : "Login"}</button>
            </div>
          </div>
          
          <div className='flex flex-col justify-center items-center row-span-2'>
            <FormChatRegistration />
            {/* <div className='flex flex-col'>
                <div className='flex'>
                  {click ? <FormChatLogin /> : <FormChatRegistration />}
                </div>
            </div> */}
          
          </div>
        </div>
      </div>

  )
}

export default page