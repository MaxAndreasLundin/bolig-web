import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

type RegisterDataProps = {
  name: string;
  email: string;
  password: string;
};

const defaultRegister: RegisterDataProps = {
  name: "",
  email: "",
  password: "",
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

    const response = await fetch("http://localhost:8080/api/v1/auth/register", {
      body: JSON.stringify(registerInput),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await response.json();
    alert(`Register complete: ${result.registerInput}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-10 border-2 shadow-2xl rounded-xl w-96"
    >
      <div className="flex justify-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">Register</h2>
        <FaUserEdit className="text-3xl" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleInput}
          className="mt-2 text-black rounded-xl"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleInput}
          className="mt-2 text-black rounded-xl"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleInput}
          className="mt-2 text-black rounded-xl"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-40 h-10 mt-4 border-2 shadow-2xl rounded-xl sm:w-20 hover:scale-105"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default FormChatRegistration;
