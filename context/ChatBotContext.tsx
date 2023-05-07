'use client'

import { createContext, useState, ReactNode } from 'react';

interface ChatContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isMinimized: boolean;
  setIsMinimized: (isMinimized: boolean) => void;
}

export const ChatContext = createContext<ChatContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isMinimized: false,
  setIsMinimized: () => {},
});

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <ChatContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isMinimized, setIsMinimized }}
    >
      {children}
    </ChatContext.Provider>
  );
};

