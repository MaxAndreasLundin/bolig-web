import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-400 sticky top-0 z-50 grid grid-cols-2'>

      {/*left*/}
      <div className='flex items-center'>
        <p className='p-5'>Bloig</p>
      </div>

      {/*right*/}
      <div className='flex items-center justify-end'>
        
      </div>
    </header>
  )
}

export default Header