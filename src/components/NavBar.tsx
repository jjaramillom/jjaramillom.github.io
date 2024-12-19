'use client';

import { ComponentProps, useTransition } from 'react';
import { clsx } from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useParams, useSelectedLayoutSegment } from 'next/navigation';

import { Link, routing, usePathname, useRouter } from '@/i18n/routing';

const routes = [
  { to: '/', tKey: 'home' },
  { to: '/about', tKey: 'about' },
] as const;

export const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('navigation');

  function onSelectChange(_locale: string) {
    if (_locale === locale) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: _locale }
      );
    });
  }

  return (
    <div className='flex flex-row pt-5 pb-2 px-5 sticky top-0 bg-main-bg bg-opacity-90 z-10 text-lg'>
      <nav>
        <ul className='flex flex-row gap-2'>
          {routes.map(({ tKey, to }) => (
            <li key={to} className={`hover:underline`}>
              <NavLink href={to}>{t(tKey)}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='ml-auto flex flex-row'>
        {routing.locales.map((l) => (
          <button
            key={l}
            className={clsx('hover:text-main-dark mr-5 p-2', {
              'text-orange hover:text-orange-dark': locale === l,
            })}
            onClick={() => onSelectChange(l)}
            disabled={isPending}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};

const NavLink = ({ href, ...rest }: ComponentProps<typeof Link>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'capitalize p-2 text-main-med hover:text-main-dark flex',
        {
          'text-orange hover:text-orange-dark': isActive,
        }
      )}
      href={href}
      {...rest}
    />
  );
};
