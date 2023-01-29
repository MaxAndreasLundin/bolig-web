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
    <form onSubmit={onSubmit} className="border rounded-xl h-96 w-96 p-10 shadow-2xl">
      <div className="flex justify-center">
        <FaUser className="text-4xl" />
      </div>
      <div className="flex flex-col">
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
      <div className="flex flex-col">
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
      <button type="submit" className="border rounded-xl h-10 w-16 mt-4">
        Login
      </button>
    </form>
  );
};

export default FormChatLogin;
