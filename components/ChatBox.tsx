import React from 'react'

const ChatBox = () => {
  return (
    <div className='bg-neutral-800 flex flex-col w-64 h-64 border'>
      <div className='flex justify-between px-2'>
        <h4>Live Chat</h4>  
        <button>X</button>      
      </div>
      <div className='flex justify-end w-full h-44 gap-4 px-2 border'>
        <p>messanger</p>
        <p>user</p>
      </div>
      <div className='flex p-3'>
        <input type="text" className='h-8 w-48 rounded-full'/>
        <button>Send</button>
      </div>
    </div>
  )
}

export default ChatBox