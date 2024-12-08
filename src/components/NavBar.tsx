'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/resume', label: 'resume' },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className='mt-5 ml-5'>
      <ul className='flex flex-row gap-2'>
        {routes.map(({ label, to }) => (
          <li key={to} className={`hover:underline`}>
            <Link
              href={to}
              className={`px-2 py-2 text-lg text-main-med hover:text-main-dark ${pathname === to ? 'text-orange hover:text-orange-dark' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};