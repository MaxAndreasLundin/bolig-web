import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Raleway } from 'next/font/google';

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
    <html lang="en">
      <head ><title>Bolig</title></head>
      <body className={raleway.className}>
        <Navbar />
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
