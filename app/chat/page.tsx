import React from 'react'

const page = () => {
  return (
      <div className='flex flex-1 bg-green-200'>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-auto'>
          <div className='border'>left</div>
          <div className='border'>right</div>
        </div>
      </div>

  )
}

export default page