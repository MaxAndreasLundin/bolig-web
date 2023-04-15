'use client';
import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import RegistrationForm from '../../components/login/RegistrationForm';
import './../globals.css';
import { GoHome } from 'react-icons/go';

const Login = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="flex h-[100vh] w-[100vw] flex-1 flex-col items-center">
      <div className="login-img h-full min-h-[700px] w-full max-w-[1400px]">
        <div className="flex h-full min-h-[700px] w-full flex-1 flex-col bg-secondary bg-opacity-95 p-10 text-white_bolig md:w-[50%] md:bg-opacity-100 lg:p-20">
          <h2 className="mb-4 text-3xl font-semibold tracking-wider text-third md:text-4xl">
            Welcome
          </h2>
          <p>
            Sign in or create an account to access all the features of our
            service.
          </p>
          {click ? (
            <LoginForm
              className={`duration-3500 transition-all ease-in-out ${
                click
                  ? 'opacity-100 transition ease-in-out'
                  : 'opacity-0 transition-all ease-in-out'
              }`}
            />
          ) : (
            <RegistrationForm
              className={`duration-3500 transition-all ease-in-out ${
                click
                  ? 'opacity-0 transition-all ease-in-out'
                  : 'opacity-100 transition-all ease-in-out'
              }`}
            />
          )}
          <div className="flex items-center justify-start">
            <p>Don´t have account? Click here to </p>
            <button
              onClick={handleClick}
              className="bg-orange-500 flex items-center gap-2 rounded-md px-2 font-medium text-third shadow-2xl outline-none hover:scale-105"
            >
              {click! ? 'Register' : 'Login'} <GoHome />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
