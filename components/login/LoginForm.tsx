import React, {useState } from 'react'
import { FaUser } from "react-icons/fa";

type LoginDataProps = {
  email: string;
  password: string;
};

const defaultLogin: LoginDataProps = {
  email: "",
  password: "",
};

const LoginForm = () => {
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
      const token = result.token;
      alert(`Login successful: ${token}`);

      localStorage.setItem("token", token);
      window.location.href = "/chatBot";
    } else {
      alert("user not found");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-96 rounded-xl border-2 p-10 shadow-2xl"
    >
      <div className="mb-4 flex justify-center gap-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <FaUser className="text-3xl" />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="..."
          id="email"
          value={email}
          onChange={handleChange}
          className="mt-2 rounded-xl text-black"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="..."
          id="password"
          value={password}
          onChange={handleChange}
          className="mt-2 rounded-xl text-black"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="mt-4 h-10 w-40 rounded-xl border-2 shadow-2xl hover:scale-105 sm:w-20"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm