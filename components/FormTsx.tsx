"use client";
import Link from "next/link";
import React, { useState } from "react";

const defaultFormData = {
  email: "",
  password: "", 
  password2: "", 
  firstName: "",
  lastName: "",
};

const registration = () => {
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
    <>
      <form
        onSubmit={onSubmit}
        className="bg-neutral-800 text-white flex flex-col p-5 m-5 shadow-2xl rounded-xl"
      >
        <h1 className="flex item-center justify-center text-4xl font-semibold py-5">Create new Account</h1>
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col py-4">
            <label htmlFor="firstName" className="pl-2 pb-2">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={onChange}
              className="rounded-xl text-gray-800"
            />
          </div>

          <div className="flex flex-col py-4">
            <label htmlFor="lastName" className="pl-2 pb-2">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={onChange}
              className="rounded-xl text-gray-800"
            />
          </div>
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="email" className="pl-2 pb-2">Email</label>
          <input type="email" id="email" value={email} onChange={onChange} className="rounded-xl text-gray-800"/>
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="password" className="pl-2 pb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChange}
            className="rounded-xl text-gray-800"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 h-10 w-32 rounded-xl my-4 shadow-2xl ease-in-out duration-300 hover:scale-105" type="submit">
            Upload post
          </button>
          <Link href={"/"}>
          <button className="bg-red-600 hover:bg-red-700 h-10 w-32 rounded-xl my-4 shadow-2xl ease-in-out duration-300 hover:scale-105" type="button">
            Cancel
          </button></Link>
        </div>
      </form>
      <div>
      </div>
    </>
  );
};

export default registration;
