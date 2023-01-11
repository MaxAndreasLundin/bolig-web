import React from 'react'
import { IoSendSharp, IoClose } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';

const ChatBox = () => {

  return (
    <div className='bg-neutral-800 flex flex-col w-64 h-64 border'>
      <div className='flex justify-between px-2'>
        <h4 className='text-lg'>Live Chat</h4>  
        <button>
          <IoClose />
          <BsChatDots /> 
        </button>      
      </div>
      <div className='flex justify-end w-full h-44 gap-4 px-2 border'>
        <p>messanger</p>
        <p>user</p>
      </div>
      <div className='flex p-3 gap-2'>
        <input type="text" placeholder='Enter your question...' className='h-8 w-48 rounded-full text-sm text-black outline-0 border-none'/>
        <button className='bg-blue-800 w-8 h-8 border-2 rounded-full flex items-center justify-center'><IoSendSharp className="" /></button>
      </div>
    </div>
  )
}

export default ChatBox