import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

type RegisterDataProps = {
  name: string;
  email: string;
  password: string;
  role: string;
};

const defaultRegister: RegisterDataProps = {
  name: "",
  email: "",
  password: "",
  role: "user",
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegisterInput(defaultRegister);

    console.log(registerInput);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-2 rounded-xl w-96 p-10 shadow-2xl"
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
          className="text-black rounded-xl mt-2"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleInput}
          className="text-black rounded-xl mt-2"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleInput}
          className="text-black rounded-xl mt-2"
        />
      </div>
      <div className="flex justify-center items-center">
        <button type="submit" className="border-2 rounded-xl h-10 w-40 sm:w-20 mt-4 shadow-2xl hover:scale-105">
          Sign up
        </button>
      </div>
    </form>
  );
};

export default FormChatRegistration;
