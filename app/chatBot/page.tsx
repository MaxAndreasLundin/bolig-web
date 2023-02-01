"use client";

import React, { useState, useRef, useEffect } from "react";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hello, I am Marvin. How can I help you today?",
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([
      ...messages,
      `Max: ${inputValue}`,
      `Marvin: Hi Max, I'm here to help!`,
    ]);
    setInputValue("");
  };

  return (
    <div className="flex h-full max-h-full flex-col rounded-lg bg-gray-900 p-8">
      <div ref={chatWindowRef} className="flex-1 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <p className="text-white">{message}</p>
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
        <button className="rounded-full bg-blue-600 p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

const ChatBotPage: React.FC = () => {
  return (
    <div className="flex h-screen max-h-96 justify-center">
      <ChatBot />
    </div>
  );
};

export default ChatBotPage;
