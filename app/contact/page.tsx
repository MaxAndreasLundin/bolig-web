import React from 'react'

const page = () => {
  return (
    <div className="flex w-full max-w-[1400px] bg-secondary flex-col md:flex-row items-center gap-40 text-white_bolig">
      <div className='flex flex-col p-10'>
        <h2 className='text-3xl text-third font-semibold pb-6'>Contact Us</h2>
        <h3 className='text-xl pb-1'>The corner of the internet where home dreams become reality!</h3>
        <p className='py-2'>We are not your average real estate team. We are property matchmakers, sunlight analyzers, and pizza delivery area confirmers. Looking for a home?</p>
        <p>We are all over it, like a well-positioned garden gnome.So, dont be shy! Reach out to us via email, phone, or even good old-fashioned foot traffic to our office.</p>
        <p className='py-4'>Remember, a home without you is just a house with no personality. Get in touch today - your dream home is just a call, click, or stroll away.</p>
        <form className='flex flex-col mt-6 w-full md:w-[70%] gap-4 text-primary'>
          <p className='text-lg text-third pb-1'>Write a message to us!</p>
          <input type="text" placeholder='Name' className='rounded-xl'/>
          <textarea name="" id="" placeholder='Message' rows={6} className='rounded-xl'></textarea>
          <button className="hover:bg-neutral-700 mt-2 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer hover:bg-opacity-40 sm:w-20 text-white_bolig">Send</button>
        </form>
      </div>
      <div className='border hidden md:flex w-full min-w-[600px] h-full flex-1'>
        <p>test</p>
      </div>
    </div>
  )
}

export default page