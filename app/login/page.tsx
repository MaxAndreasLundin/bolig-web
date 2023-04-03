'use client';
import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import RegistrationForm from '../../components/login/RegistrationForm';

const Login = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="flex h-[100vh] w-full max-w-[1200px] flex-1 flex-col items-center xl:rounded-xl overflow-x-hidden text-white bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `linear-gradient(rgba(26, 23, 23, 0.2), rgba(20, 19, 19, 0.2)),url(/city.jpg)`,
    }}>
      
        <div className='h-full w-full flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='py-32 md:py-0 flex h-full lg:col-span-2 flex-col justify-center items-center'>
            <h1 className="text-5xl font-bold">Welcome,</h1>
            <p>Sign in or create an account to access all the features of our service.</p>
            <div className="mt-4 flex items-center justify-center gap-1">
              <p>Click here to</p>
              <button
                onClick={handleClick}
                className="h-10 w-20 rounded-md bg-orange-500 shadow-2xl outline-none hover:scale-105"
                >
                {click! ? 'Register' : 'Login'}
              </button>
            </div>
          </div>
          
          <div className='h-full flex flex-col items-center justify-center overflow-hidden flex-1'>
            {/* {click ? <LoginForm className={`${click ? 'opacity-100 duration-3500 transition-all ease-in-out' : 'opacity-0 duration-3500 transition-all ease-in-out'}`} /> : <RegistrationForm className={`${click ? 'opacity-0 duration-3500 transition-all ease-in-out' : 'opacity-100 duration-3500 transition-all ease-in-out'}`} />
            } */}{click ?
          <LoginForm
              className={`duration-3500 transition-all ease-in-out ${
                click ? 'opacity-100 transition ease-in-out' : 'opacity-0 transition-all ease-in-out'
              }`}
            /> :
            <RegistrationForm
              className={`duration-3500 transition-all ease-in-out ${
                click ? 'transition-all opacity-0 ease-in-out' : 'transition-all opacity-100 ease-in-out'
              }`}
            />}
          </div>
        </div>

    </div>
  );
};

export default Login;
