import { useTranslations } from 'next-intl';
import { Poppins } from 'next/font/google';

import { Link } from '@/i18n/routing';
import { Title } from './Title';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <html lang={'en'}>
      <body
        className={`${poppins.className} antialiased flex flex-col h-full relative`}
      >
        <div className='mb-5 mt-12 px-4 sm:px-12 flex-1 max-w-[900px] mx-auto flex flex-col items-center'>
          <Title className='font-[300] leading-tight'>
            <div className='text-orange mb-3'>404</div>
            {t('not_found')}
          </Title>
          <button className='mt-8 px-4 py-2 rounded-md bg-main-light font-semibold bg-opacity-70 hover:bg-opacity-50 shadow-md w-fit'>
            <Link href='/' className='hover:text-orange'>
              Go to home
            </Link>
          </button>
        </div>
      </body>
    </html>
  );
};
