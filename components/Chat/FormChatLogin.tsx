"use client";
import React, { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";

type LoginDataProps = {
  username: string;
  password: string;
};

const defaultLogin: LoginDataProps = {
  username: "",
  password: "",
};

const FormChatLogin = () => {
  const [loginInput, setLoginInput] = useState(defaultLogin);
  const { username, password } = loginInput;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginInput(defaultLogin);

    console.log(loginInput);
  };

  return (
    <form onSubmit={onSubmit} className="border-2 rounded-xl w-96 p-10 shadow-2xl">
      <div className="flex justify-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <FaUser className="text-3xl" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="..."
          id="username"
          value={username}
          onChange={handleChange}
          className="text-black rounded-xl mt-2"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="..."
          id="password"
          value={password}
          onChange={handleChange}
          className="text-black rounded-xl mt-2"
        />
      </div>
      <div className="flex justify-center items-center">
        <button type="submit" className="border-2 rounded-xl h-10 w-40 sm:w-20 mt-4 shadow-2xl hover:scale-105">
          Login
        </button>
      </div>
    </form>
  );
};

export default FormChatLogin;
