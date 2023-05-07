import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBotWindow from '../components/chat/ChatBotWindow';
import { Raleway } from 'next/font/google';
import { ChatProvider } from '../context/chatBotContext';
import React from 'react';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChatProvider>
      <html lang="en">
        <head>
          <title>Bolig</title>
        </head>
        <body className={raleway.className}>
          <Navbar />
          {children}
          {<Footer />}
          <ChatBotWindow />
        </body>
      </html>
    </ChatProvider>
  );
}
