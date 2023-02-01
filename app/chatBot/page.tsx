"use client";

import React, { useState, useRef, useEffect } from "react";
import AdminPanel from "../../components/AdminPanel";

interface ChatMessage {
  human: boolean;
  message: string;
}

const getChatMessages = async () => {
  const token = localStorage.getItem("token");
  return await fetch("http://localhost:8080/api/v1/messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((data) => data as ChatMessage[]);
};

const postChatMessage = async (message: string) => {
  const token = localStorage.getItem("token");
  return await fetch("http://localhost:8080/api/v1/messages", {
    body: message,
    headers: {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  })
    .then((resp) => resp.json())
    .then((data) => data as ChatMessage[]);
};

const ChatBot: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
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
        message: "...",
      },
    ]);
    setInputValue("");

    const response = await postChatMessage(inputValue);
    setChatMessages(response);
  };

  let augmentedChatMessages = chatMessages;

  if (augmentedChatMessages.length === 0) {
    augmentedChatMessages = [
      {
        human: false,
        message:
          "Hello my name is Marv, how can I help you become less retared?",
      },
    ];
  }

  return (
    <div className="flex h-full max-h-full flex-col rounded-lg bg-gray-900 p-8">
      <div ref={chatWindowRef} className="flex-1 overflow-auto">
        {augmentedChatMessages.map((chatMessage, index) => (
          <div key={index} className="mb-2">
            <p className="text-white">
              {chatMessage.human ? "You" : "Marv"}: {chatMessage.message}
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
      <AdminPanel />
    </div>
  );
};

export default ChatBotPage;
