"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

type LoginDataProps = {
  email: string;
  password: string;
};

const defaultLogin: LoginDataProps = {
  email: "",
  password: "",
};

const FormChatLogin = () => {
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

    const response = await fetch(
      "http://localhost:8080/api/v1/auth/authenticate",
      {
        body: JSON.stringify(loginInput),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.ok) {
      const result = await response.json();
      alert(`Login successful: ${result.result}`);
      localStorage.setItem("token", JSON.stringify(result));
      window.location.href = "/chatUserAccount";
    } else {
      alert("user not found");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-10 border-2 shadow-2xl rounded-xl w-96"
    >
      <div className="flex justify-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <FaUser className="text-3xl" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="..."
          id="email"
          value={email}
          onChange={handleChange}
          className="mt-2 text-black rounded-xl"
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
          className="mt-2 text-black rounded-xl"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-40 h-10 mt-4 border-2 shadow-2xl rounded-xl sm:w-20 hover:scale-105"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default FormChatLogin;
