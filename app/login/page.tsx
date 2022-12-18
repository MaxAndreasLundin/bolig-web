import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center h-[90vh]'>
      <h1 className='text-black text-2xl font-bold'>Logga in</h1>
      <div className='flex gap-4 m-8'>
        <input className='border border-black bg-white rounded-full text-sm h-10 pl-2' type="text" name="name" placeholder='Andvändarnamn...'/>
        <input className='border border-black bg-white rounded-full text-sm h-10 pl-2' type="password" name="password" placeholder='Lössenord...'/>
      </div>
      <p className='text-black' >Inget konto? Skapa ett konto genom att <Link href={"registration"}><span className='underline cursor-pointer'>klicka här!</span></Link></p>
    </div>
  )
}

export default login