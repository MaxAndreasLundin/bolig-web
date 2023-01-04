"use client";
import React, { useState } from "react";

const defaultFormData = {
  email: "",
  password: "",
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

    const JSONdata = JSON.stringify(defaultFormData);
    const endpoint = "http://localhost:3333/auth/signup";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit} className="text-black">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={onChange}
        />

        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" value={lastName} onChange={onChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onChange} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
        />

        <button type="submit">Upload post</button>
      </form>
    </>
  );
};

export default registration;
