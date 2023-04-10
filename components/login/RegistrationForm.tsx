"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

type FormDataProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const defaultFormData: FormDataProps = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

interface RegistrationStyleProps {
  className: string;
}

const RegistrationForm = ({className}: RegistrationStyleProps ) => {
  const [formData, setFormData] = useState(defaultFormData);
  const { firstName, lastName, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Take the previus state, and return previus state in a object, by destructuring it
    //And then we want to update the event.target.id - And send it to the event.target.value
    //Change the current value of that property to the one we have just typed right here in the input field
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData); //Clears the input field

    // Send the form data to our API and get a response.
    const response = await fetch("http://localhost:3333/auth/signup", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(formData),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Sign up complete: ${result.formData}`);
  };
  return (
    <form onSubmit={onSubmit} className={`${className} flex justify-center h-full w-full py-10 flex-col gap-6 pr-10 sm:pr-32 md:pr-0 lg:pr-20`}>
      <div className="mb-10 flex gap-4">
        <h2 className="text-4xl font-semibold">Register</h2>
        <FaUserEdit className="text-4xl" />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="firstname"> First name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="..."
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="..."
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="..."
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="..."
          className="mt-2 w-full border-0 border-b-2 border-white_bolig bg-secondary bg-opacity-95 placeholder:text-white_bolig"
        />
      </div>
      <div className="flex items-center justify-start mt-6 gap-4">
        <Link href={"/"}>
          <button
            className="mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:cursor-pointer hover:scale-105 hover:bg-neutral-700 hover:bg-opacity-40 sm:w-20"
          >
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:cursor-pointer hover:scale-105 hover:bg-neutral-700 hover:bg-opacity-40 sm:w-20"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
