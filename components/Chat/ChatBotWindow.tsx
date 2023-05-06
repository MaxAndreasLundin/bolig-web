import React, { useState } from 'react';
import JavaChatLogin from '../../app/java/javaChat/page/JavaChatLogin';
import ChatBot from './ChatBot';

const ChatBotWindow: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [minimized, setMinimized] = useState<boolean>(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <div
      className={`fixed bottom-0 right-0 mb-4 mr-4 w-80 ${
        minimized ? 'h-16' : 'h-96'
      } rounded-lg transition-all duration-300`}
    >
      <div className="bg-gray-700 text-white flex items-center justify-between p-2">
        <span>ChatBot</span>
        <button onClick={toggleMinimize}>
          {minimized ? 'Expand' : 'Minimize'}
        </button>
      </div>
      {!minimized && (
        <div className="bg-gray-200 h-full">
          {!loggedIn ? (
            <JavaChatLogin onLogin={handleLogin} />
          ) : (
            <ChatBot onLogout={handleLogout} />
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBotWindow;
