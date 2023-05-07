'use client';

import React, { useState, useRef, useEffect } from 'react';

const handleLogout = (onLogout: () => void) => {
  localStorage.removeItem('java_token');
  onLogout();
};

interface ChatBotProps {
  onLogout: () => void;
}

interface ChatMessage {
  human: boolean;
  message: string;
}

const getChatMessages = async () => {
  const token = localStorage.getItem('java_token');
  return await fetch(
    `${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/messages`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    },
  )
    .then((resp) => resp.json())
    .then((data) => data as ChatMessage[]);
};

const postChatMessage = async (message: string) => {
  const token = localStorage.getItem('java_token');
  return await fetch(
    `${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/messages`,
    {
      body: message,
      headers: {
        'Content-Type': 'text/plain',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
    },
  )
    .then((resp) => resp.json())
    .then((data) => data as ChatMessage[]);
};

const ChatBot: React.FC<ChatBotProps> = ({ onLogout }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    const doWork = async () => {
      const chatMessages = await getChatMessages();
      setChatMessages(chatMessages);
    };
    doWork();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatMessages([
      ...chatMessages,
      {
        human: true,
        message: inputValue,
      },
      {
        human: false,
        message: '...',
      },
    ]);
    setInputValue('');

    const response = await postChatMessage(inputValue);
    setChatMessages(response);
  };

  let augmentedChatMessages = chatMessages;

  if (augmentedChatMessages.length === 0) {
    augmentedChatMessages = [
      {
        human: false,
        message: 'Hello my name is Marv, how can I help you?',
      },
    ];
  }

  return (
    <div className="flex max-h-96 max-w-fit flex-col rounded-lg p-1 text-white_bolig">
      <div ref={chatWindowRef} className="flex-1 overflow-auto">
        {augmentedChatMessages.map((chatMessage, index) => (
          <div key={index} className="mb-2">
            <p className="text-white">
              {chatMessage.human ? 'You' : 'Marv'}: {chatMessage.message}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          className="input-field mb-1 mt-1 w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write a message..."
        />
        <div className="flex justify-between">
          <button className="mt-4 h-10 w-40 rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer sm:w-20">
            Submit
          </button>
          <button
            onClick={() => handleLogout(onLogout)}
            className="mt-4 h-10 w-40 justify-end rounded-md border-2 border-third bg-secondary hover:scale-105 hover:cursor-pointer sm:w-20"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
