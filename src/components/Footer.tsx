import React from 'react';

export const Footer = () => {
  return (
    <footer className='w-full text-center p-4'>
      <span className='m-auto'>
        <b>Jacobo Jaramillo</b> &copy; {new Date().getFullYear()}. Made with
        <span className='text-orange'>&nbsp;❤&nbsp;</span> & &nbsp;
        <a href='https://nextjs.org/'>Next.js</a>
      </span>
    </footer>
  );
};
