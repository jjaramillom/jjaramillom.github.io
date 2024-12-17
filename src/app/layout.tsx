import { Metadata, Viewport } from 'next';

import './globals.css';

import { TECH_ICONS } from './[locale]/consts';

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
    ...TECH_ICONS.map(({ label }) => label),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
