import React from 'react'
import { FaInstagram, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full h-16 border-2 border-green-500'>
      <div className='items-start border-2 border-red-500 gird gird-cols-1'>
        <div className='flex items-center justify-center gap-2'>
          <FaInstagram />
          <p>Instagram</p>
          <FaFacebookSquare />
          <p>Facebook</p>
          <FaLinkedinIn />
          <p>pnkedin</p>
        </div>  
        <p>Bloig 2023</p>
      </div>
    </div>
  )
}

export default Footer