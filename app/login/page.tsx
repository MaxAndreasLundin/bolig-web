import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-neutral-900  text-white">
      <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-800 p-10">
        <h1 className="text-2xl font-bold">Logga in</h1>
        <div className="m-8 flex flex-col gap-4">
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
          <button className="flex w-full justify-center rounded-full border border-gray-600 bg-blue-600 p-2 hover:bg-blue-700">
            Sign in
          </button>
        </div>
        <p>
          No account? Create a new account by{" "}
          <Link href={"registration"}>
            <span className="cursor-pointer underline">Click here!</span>
          </Link>
        </p>
        <p className="pt-2 text-xs text-blue-500">
          Forgot password, Click here.
        </p>
      </div>
    </div>
  );
};

export default login;
