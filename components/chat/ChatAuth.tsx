import React, { useState } from 'react';
import { FaUser, FaUserEdit } from 'react-icons/fa';

interface FormChatAuthProps {
  isLoginForm: boolean;
  onLogin: () => void;
}

const ChatAuth: React.FC<FormChatAuthProps> = ({ isLoginForm, onLogin }) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = isLoginForm
      ? `${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/auth/authenticate`
      : `${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/auth/register`;

    const response = await fetch(url, {
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (isLoginForm) {
      if (response.ok) {
        const result = await response.json();
        const token = result.token;
        alert(`Login successful: ${token}`);

        localStorage.setItem('java_token', token);
        onLogin();
      } else {
        alert('user not found');
      }
    } else {
      const result = await response.json();
      alert(`Register complete: ${result.input}`);
    }

    setInput({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={onSubmit} className="max-w-fit text-white_bolig rounded-xl p-10">
      <div className="mb-4 flex justify-center gap-4">
        <h2 className="text-2xl font-bold">{isLoginForm ? 'Login' : 'Register'}</h2>
        {isLoginForm ? <FaUser className="text-3xl" /> : <FaUserEdit className="text-3xl" />}
      </div>
      {!isLoginForm && (
        <div className="mb-4 flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={input.name}
            onChange={handleChange}
            className="text-secondary mt-2 rounded-xl"
          />
        </div>
      )}
      <div className="mb-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={input.email}
          onChange={handleChange}
          className="text-secondary mt-2 rounded-xl"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={input.password}
          onChange={handleChange}
          className="text-secondary mt-2 rounded-xl"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer sm:w-20"
        >
          {isLoginForm ? 'Login' : 'Sign up'}
        </button>
      </div>
    </form>
  );
};

export default ChatAuth;
