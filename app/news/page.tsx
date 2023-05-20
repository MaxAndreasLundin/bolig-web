import React from 'react'
import { NewsLetter } from '../../components/helpers/NewsLetter'
import NewsLetterCard from '../../components/card/NewsLetterCard'
import { BreakingNewsLetter } from '../../components/helpers/BreakingNewsLetter'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { BsGraphUpArrow } from 'react-icons/bs'

const page = () => {
  return (
    <div className='flex h-[100vh] w-[100vw] flex-1 justify-center text-primary'>
      <div className='flex flex-col w-full max-w-[1400px] bg-white_bolig p-10'>
        
        <div className='w-full pb-8 border-b-2'>
          <div className='flex items-center pb-4 gap-2'>
            <h2 className='text-3xl font-bold tracking-wide'>Real Estate News</h2>
            <BsGraphUpArrow className='text-2xl text-third'/>
          </div>
          <p className='text-lg'>Latest news from the housing market. <br/> Here we gather everything from interior design tips to guides and economic questions.</p>
        </div>
        
        <div className='flex justify-between'>
          <div>{NewsLetter.map((news, index) => (
            <NewsLetterCard
              key={index} 
              id={news.id}
              title={news.title}
              info={news.info}
              image={news.image}
            />
          ))}</div>
          <div className='border-l-2 border-third hidden lg:flex flex-col w-[30%] p-6'>
            <div className='flex justify-center items-center gap-4 pb-6'>
              <h3 className='text-3xl font-semibold'>Breaking News</h3>
              <HiOutlineNewspaper className='text-2xl text-third'/>
            </div>
            <ul>
              {BreakingNewsLetter.map((newsTitle) => (
                <li key={newsTitle.id} className='font-medium tracking-wide py-4 border-b-2 hover:cursor-pointer'>{newsTitle.title}</li>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default page