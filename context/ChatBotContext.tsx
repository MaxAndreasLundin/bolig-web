'use client';

import { createContext, ReactNode, useState } from 'react';

interface ChatContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isMinimized: boolean;
  setIsMinimized: (isMinimized: boolean) => void;
}

export const ChatContext = createContext<ChatContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isMinimized: true,
  setIsMinimized: () => {},
});

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <ChatContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isMinimized, setIsMinimized }}
    >
      {children}
    </ChatContext.Provider>
  );
};
