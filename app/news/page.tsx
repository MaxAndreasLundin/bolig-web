import React from 'react'

const page = () => {
  return (
    <div className='flex h-[100vh] w-[100vw] flex-1 justify-center text-primary'>
      <div className='border flex flex-col w-full max-w-[1400px] bg-white_bolig p-10'>
        <div className='w-full'>
          <h2 className='text-3xl font-bold tracking-wide'>Real Estate News</h2>
          <p>Latest news from the housing market. Here we gather everything from interior design tips to guides and economic questions.</p>
        </div>
        <div>news</div>
      </div>
    </div>
  )
}

export default page