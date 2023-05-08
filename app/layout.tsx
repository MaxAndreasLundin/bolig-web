import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBotWindow from '../components/chat/ChatBotWindow';
import { Raleway } from 'next/font/google';
import { ChatProvider } from '../context/ChatBotContext';
import React from 'react';
import { SearchProvider } from '../context/SearchContext';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ChatProvider>
      <SearchProvider>
        <html lang="en">
        <head>
          <title>Bolig</title>
        </head>
        <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
        <ChatBotWindow />
        </body>
        </html>
      </SearchProvider>
    </ChatProvider>
  );
}
