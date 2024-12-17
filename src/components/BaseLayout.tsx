import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

type Props = {
  children: ReactNode;
  locale: string;
};

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const BaseLayout = async ({ children, locale }: Props) => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${poppins.className} antialiased flex flex-col h-full relative`}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <div className='mb-5 mt-12 px-4 sm:px-12 flex-1 max-w-[900px] mx-auto'>
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
