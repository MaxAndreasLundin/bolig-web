import React, { useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'

type RegisterDataProps = {
  name: string,
  email: string,
  password: string,
}

const defaultRegister: RegisterDataProps = {
  name: "",
  email: "",
  password: "",
}

const FormChatRegistration = () => {

  const [registerInput, setRegisterInput] = useState(defaultRegister)
  const {name, email, password} = registerInput;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <form className="border-2 rounded-xl w-96 p-10 shadow-2xl">
      <div className="flex justify-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">Register</h2>
        <FaUserEdit className="text-3xl"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" onChange={handleInput} className="text-black rounded-xl mt-2"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={handleInput} className="text-black rounded-xl mt-2"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleInput} className="text-black rounded-xl mt-2"/>
      </div>
      <div>
        <button type="submit" className="border rounded-xl h-10 w-16 mt-4">Sign up</button>
      </div>
    </form>
  )
}

export default FormChatRegistration