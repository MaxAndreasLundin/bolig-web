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

    const response = await fetch(`${process.env.NEXT_PUBLIC_NEST_BACKEND}/auth/signin`, {
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
      window.location.href = '/';
    } else {
      alert('user not found');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${className} flex justify-center h-full w-full py-10 flex-col gap-6 pr-10 sm:pr-32 md:pr-0 lg:pr-20`}
    >
      <div className="flex gap-2">
        <h2 className="text-3xl font-semibold">Login</h2>
        <FaUser className="text-3xl mt-1" />
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
            className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
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
            className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
          />
        </div>
      </div>
      <div className="flex items-center justify-start text-white_bolig hover:cursor-pointer py-2">
        <button
          type="submit"
          className="mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:cursor-pointer hover:scale-105 hover:bg-neutral-700 hover:bg-opacity-40 sm:w-20"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
