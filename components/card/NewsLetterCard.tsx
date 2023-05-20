import React from 'react'
import Image from 'next/image';

interface Props {
  id: number;
  title: string;
  info: string;
  image: string;
}

const NewsLetterCard = ({id, title, info, image}: Props) => {
  return (
    <div key={id} className='border-b-2 flex flex-col md:flex-row gap-4 py-8 w-full max-w-[800px] hover:cursor-pointer'>
      <div className='w-full md:w-[20%] h-[150px] relative'>
        <Image src={image} fill style={{ objectFit: 'cover' }} alt='test' className='rounded-xl' />
      </div>
      <div className='w-[80%]'>
        <h3 className='text-xl font-semibold pb-4'>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default NewsLetterCard