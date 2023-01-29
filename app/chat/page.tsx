import React from 'react'
import FormChatLogin from '../../components/FormChatLogin'

const page = () => {
  return (
      <div className='flex flex-1'>
        <div className='grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-1 w-full'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold'>Welcome,</h1>
            <p>Sign in or create an account to access this website.</p>
          </div>
          <div className='flex flex-col justify-center items-center row-span-2'>
            <FormChatLogin />
          </div>
        </div>
      </div>

  )
}

export default page