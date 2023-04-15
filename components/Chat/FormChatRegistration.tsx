import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

type RegisterDataProps = {
  name: string;
  email: string;
  password: string;
};

const defaultRegister: RegisterDataProps = {
  name: '',
  email: '',
  password: '',
};

const FormChatRegistration = () => {
  const [registerInput, setRegisterInput] = useState(defaultRegister);
  const { name, email, password } = registerInput;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegisterInput(defaultRegister);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/auth/register`,
      {
        body: JSON.stringify(registerInput),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    const result = await response.json();
    alert(`Register complete: ${result.registerInput}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-96 rounded-xl border-2 p-10 shadow-2xl"
    >
      <div className="mb-4 flex justify-center gap-4">
        <h2 className="text-2xl font-bold">Register</h2>
        <FaUserEdit className="text-3xl" />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleInput}
          className="text-black mt-2 rounded-xl"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleInput}
          className="text-black mt-2 rounded-xl"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleInput}
          className="text-black mt-2 rounded-xl"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="mt-4 h-10 w-40 rounded-xl border-2 shadow-2xl hover:scale-105 sm:w-20"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default FormChatRegistration;
