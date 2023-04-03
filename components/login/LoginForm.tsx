import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import Image from 'next/image';
import loginImg from '../../public/city.jpg';

type LoginDataProps = {
  email: string;
  password: string;
};

const defaultLogin: LoginDataProps = {
  email: '',
  password: '',
};

interface LoginStyleProps {
  className: string;
}

const LoginForm = ({ className }: LoginStyleProps) => {
  const [loginInput, setLoginInput] = useState(defaultLogin);
  const { email, password } = loginInput;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginInput(defaultLogin);
    console.log(loginInput);

    const response = await fetch('http://localhost:3333/auth/signin', {
      body: JSON.stringify(loginInput),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    if (response.ok) {
      const result = await response.json();
      const token = result.access_token;
      console.log('r', result);
      console.log('', token);
      alert(`Login successful: ${token}`);

      localStorage.setItem('token', token);
    } else {
      alert('user not found');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${className} flex justify-center h-full w-full flex-col p-10 gap-10 px-8 shadow-2xl bg-stone-800 bg-opacity-60`}
    >
      <div className="mb-4 flex gap-4">
        <h2 className="text-4xl font-semibold">Login</h2>
        <FaUser className="text-4xl" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <div className="flex items-center gap-4">
          <AiOutlineMail className="h-8 w-8" />
          <input
            type="email"
            placeholder="..."
            id="email"
            value={email}
            onChange={handleChange}
            className="mt-2 w-full border-0 border-b-2 border-stone-700 bg-transparent placeholder:text-white"
          />
        </div>
      </div>

      <div className="mb-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <div className="flex items-center gap-4">
          <AiOutlineLock className="h-8 w-8" />
          <input
            type="password"
            placeholder="..."
            id="password"
            value={password}
            onChange={handleChange}
            className="mt-2 w-full border-0 border-b-2 border-stone-700 bg-transparent placeholder:text-white"
          />
        </div>
      </div>
      <div className="flex items-center justify-start hover:cursor-pointer">
        <button
          type="submit"
          className="mt-4 h-10 w-40 rounded-md border-2 shadow-2xl hover:cursor-pointer hover:scale-105 hover:bg-neutral-700 hover:bg-opacity-40 sm:w-20"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
