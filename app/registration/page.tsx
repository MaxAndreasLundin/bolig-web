"use client";
import { useFormik } from "formik";
import React from "react";

const registration = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },

    onSubmit: (values) => {
      console.log(values);
    }
  })
  

  return (
    <div className="bg-white flex flex-col items-center justify-center h-[90vh]">
      <form onSubmit={formik.handleSubmit} className="bg-slate-200 p-10 rounded-lg">
        <h1 className="flex justify-center mb-10 text-black text-2xl font-bold underline">
          Create a new account
        </h1>
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Firstname"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            className="input-field text-black"
          />
          <input
            type="text"
            placeholder="Lastname"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            className="input-field text-black"
          />
        </div>
        <div className="flex justify-center mb-8">
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="input-field w-full text-black"
          />
        </div>
        <div className="flex gap-4 mb-8">
          
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="input-field w-full text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 flex justify-center w-full rounded-full p-2 border border-gray-600 hover:bg-green-600"
        >
          <p className="hover:scale-110">Create account!</p>
        </button>
      </form>
    </div>
  );
};

export default registration;
