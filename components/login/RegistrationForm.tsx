'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

type FormDataProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const defaultFormData: FormDataProps = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

interface RegistrationStyleProps {
  className: string;
}

const RegistrationForm = ({ className }: RegistrationStyleProps) => {
  const [formData, setFormData] = useState(defaultFormData);
  const { firstName, lastName, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData); //Clears the input field

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEST_BACKEND}/auth/signup`,
      {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    await response.json();
    alert(`Sign up complete`);
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} flex h-full w-full flex-col justify-center gap-6 py-10 pr-10 sm:pr-32 md:pr-0 lg:pr-20`}
    >
      <div className="mb-10 flex gap-4">
        <h2 className="text-4xl font-semibold">Register</h2>
        <FaUserEdit className="text-4xl" />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="firstname"> First name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={onChange}
          placeholder=""
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={onChange}
          placeholder=""
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder=""
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder=""
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mt-6 flex items-center justify-start gap-4">
        <Link href={'/'}>
          <button className="hover:bg-neutral-700 mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer hover:bg-opacity-40 sm:w-20">
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="hover:bg-neutral-700 mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer hover:bg-opacity-40 sm:w-20"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
