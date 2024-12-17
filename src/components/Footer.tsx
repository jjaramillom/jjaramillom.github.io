import React from 'react';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className='w-full text-center p-4'>
      <span className='m-auto'>
        <b>Jacobo Jaramillo</b> &copy; {new Date().getFullYear()}. {t('footer')}
        <span className='text-orange'>&nbsp;❤&nbsp;</span> & &nbsp;
        <a href='https://nextjs.org/'>Next.js</a>
      </span>
    </footer>
  );
};
