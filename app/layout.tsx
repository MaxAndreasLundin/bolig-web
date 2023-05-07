'use client'

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBotWindow from '../components/Chat/ChatBotWindow';
import { Raleway } from 'next/font/google';
import { useState } from 'react';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <html lang="en">
    <head>
      <title>Bolig</title>
    </head>
    <body className={raleway.className}>
    <Navbar />
    {children}
    {<Footer />}
    <ChatBotWindow
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      isMinimized={isMinimized}
      setIsMinimized={setIsMinimized}
    />
    </body>
    </html>
  );
}
