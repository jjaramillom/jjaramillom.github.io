import { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

import { Footer, NavBar } from '@/components';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Jacobo Jaramillo',
  description:
    'An colombian software engineer working for international companies',
  authors: [{ name: 'Jacobo Jaramillo' }],
  keywords: [
    'jacobo',
    'jaramillo',
    'software',
    'engineer',
    'front',
    'fullstack',
    'javascript',
    'typescript',
    'react',
    'germany',
    'colombia',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} antialiased flex flex-col h-full relative`}
      >
        <NavBar />
        <div className='mb-5 mt-12 px-4 sm:px-12 flex-1 max-w-[900px] mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
