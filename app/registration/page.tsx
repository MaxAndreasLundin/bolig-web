import React from 'react'

const registration = () => {
  return (
    <div className='flex flex-col'>
      <form action="">
        <h1>Registrera dig</h1>
        <div>
          <input type="text" placeholder='Namn'/>
          <input type="text" placeholder='Efternamn'/>
        </div>
        <input type="email" placeholder='Email'/>
        <div>
          <input type="text" placeholder='Användarnamn'/>
          <input type="password" placeholder='Lössenord'/>
        </div>
      </form>
    </div>
  )
}

export default registration