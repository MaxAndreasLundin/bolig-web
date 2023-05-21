'use client';

import React, { useContext, useState } from 'react';
import ChatBot from './ChatBot';
import ChatAuth from './ChatAuth';
import { ChatContext } from '../../context/ChatBotContext';

const ChatBotWindow: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn, isMinimized, setIsMinimized } =
    useContext(ChatContext);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleToggle = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  return (
    <>
      {isMinimized ? (
        <div
          className="fixed bottom-0 right-0 z-50 m-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary p-4 opacity-90 shadow-lg"
          onClick={handleToggle}
        >
          <button className="text-3xl text-third">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="fixed bottom-0 right-0 z-50 m-3 h-fit max-w-sm rounded-lg border-2 border-third bg-secondary p-1 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-third">ChatBot Marv</h2>
            <button
              onClick={handleToggle}
              className="flex h-8 w-8 items-center justify-center rounded-full text-3xl text-third shadow-lg"
            >
              -
            </button>
          </div>

          {isLoggedIn ? (
            <div>
              <ChatBot onLogout={() => setIsLoggedIn(false)} />
            </div>
          ) : (
            <div>
              <ChatAuth
                isLoginForm={!showRegistrationForm}
                onLogin={() => setIsLoggedIn(true)}
              />
              <p className="m-2 flex justify-center text-third">
                <span>
                  {showRegistrationForm
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                  &nbsp;
                </span>
                <button onClick={toggleForm}>
                  {showRegistrationForm ? 'Log in here' : 'Register here'}
                </button>
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBotWindow;
