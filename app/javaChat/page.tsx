"use client";
import React, { useState } from "react";
import FormChatLogin from "../../components/Chat/FormChatLogin";
import FormChatRegistration from "../../components/Chat/FormChatRegistration";

const page = () => {
  const [click, setClick] = useState<boolean>(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="flex flex-1">
      <div className="grid w-full grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-1">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome,</h1>
          <p>Sign in or create an account to access this website.</p>
          <div className="mt-4 flex items-center justify-center gap-1">
            <p>Click here to</p>
            <button
              onClick={handleClick}
              className="h-10 w-20 rounded-xl bg-orange-500 shadow-2xl outline-none hover:scale-105"
            >
              {click! ? "Register" : "Login"}
            </button>
          </div>
        </div>

        <div className="row-span-2 flex flex-col items-center justify-center">
          <div className="flex flex-col">
            {click ? <FormChatLogin /> : <FormChatRegistration />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
