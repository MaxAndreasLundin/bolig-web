'use client';

import React, { useState, useRef, useEffect } from 'react';
import AdminPanel from '../../../components/Chat/AdminPanel';

interface ChatMessage {
  human: boolean;
  message: string;
}

const getChatMessages = async () => {
  const token = localStorage.getItem('token');
  return await fetch(`${process.env.JAVA_BACKEND}/api/v1/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
    .then((resp) => resp.json())
    .then((data) => data as ChatMessage[]);
};

const postChatMessage = async (message: string) => {
  const token = localStorage.getItem('token');
  return await fetch(`${process.env.JAVA_BACKEND}/api/v1/messages`, {
    body: message,
    headers: {
      'Content-Type': 'text/plain',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
  })
    .then((resp) => resp.json())
    .then((data) => data as ChatMessage[]);
};

const ChatBot: React.FC = () => {
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
    <div className="bg-gray-900 m-6 flex h-96 max-h-full flex-col rounded-lg p-8">
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
          className="input-field mb-2 w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write a message..."
        />
        <button className="bg-blue-600 text-white rounded-full p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

const ChatBotPage: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <AdminPanel />
      <ChatBot />
      <div>
        <button onClick={handleLogout} className="h-10 w-16 rounded-xl border">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ChatBotPage;
