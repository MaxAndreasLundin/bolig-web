import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-black text-2xl font-bold">Logga in</h1>
      <div className="flex flex-col gap-4 m-8">
        <div className="flex gap-4">
          <input
            className="input-field"
            type="email"
            name="name"
            placeholder="Email..."
          />
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Pasword..."
          />
        </div>
      <button className="bg-green-500 flex justify-center w-full rounded-full p-2 border border-gray-600 hover:bg-green-600">Sign in</button>
      </div>
      <p className="text-black">
        No account? Create a new account by{" "}
        <Link href={"registration"}>
          <span className="underline cursor-pointer">Click here!</span>
        </Link>
      </p>
      <p className="text-blue-500 text-xs pt-2">Forgot password, Click here.</p>
    </div>
  );
};

export default login;
