"use client"
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

type LoginDataProps = {
  username: string;
  password: string;
}

const defaultLogin: LoginDataProps = {
  username: "",
  password: "",
}

const FormChatLogin = () => {
  const [loginInput, setLoginInput] = useState(defaultLogin);
  const {username, password} = loginInput;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,    
    }));
  };


  return (
    <form action="">
      <div className='flex justify-center'>
        <FaUser className='text-4xl'/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='...' onChange={handleChange} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='...' onChange={handleChange} />
      </div>
      <button type='submit' className='border rounded-xl h-10 w-16'>Login</button>
    </form>
  )
}

export default FormChatLogin