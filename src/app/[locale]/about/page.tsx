import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

import { booksList, moviesList, musicList } from './consts';
import styles from './page.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function AboutPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations('about');
  const extraInformation = [
    {
      title: t('favorite_movies'),
      elements: moviesList.map(({ link, title, year }) => (
        <li key={title} className='ml-4 mb-1'>
          <a target='_blank' rel='noopener noreferrer' href={link}>
            {title}
          </a>
          &nbsp;{year}
        </li>
      )),
    },
    {
      title: t('favorite_books'),
      elements: booksList.map(({ author, link, title }) => (
        <li key={title} className='ml-4 mb-1'>
          <a target='_blank' rel='noopener noreferrer' href={link}>
            {title}
          </a>
          &nbsp;-<i>{author}</i>
        </li>
      )),
    },
    {
      title: t('favorite_songs'),
      elements: musicList.map(({ band, song, link }) => (
        <li key={band} className='ml-4 mb-1'>
          <a target='_blank' rel='noopener noreferrer' href={link}>
            {song}
          </a>
          &nbsp;-{band}
        </li>
      )),
    },
  ];
  const designations = [
    t('designations.ts_lover'),
    t('designations.fullstack_guy'),
    t('designations.avid_learner'),
    t('designations.tennis_player'),
  ];

  return (
    <div className='flex flex-col px-4 sm:px-0 align-items-center items-center'>
      <div className='relative mb-6 rounded-full overflow-hidden w-[220px] h-[220px]'>
        <Image
          width={220}
          height={220}
          src='/profile.webp'
          alt='jacobo jaramillo portrait'
        />
        <div className={styles['picture-border']} />
      </div>
      <article className='pt-2 text-justify'>
        <div className='text-center'>
          {designations.map((designation, i) => (
            <div key={designation} className='inline-block'>
              &nbsp;
              <span>
                <b>{designation}</b>
              </span>
              &nbsp;
              {i < designations.length - 1 ? (
                <span className='text-main-dark'>|</span>
              ) : null}
            </div>
          ))}
        </div>
        <p className='mt-6'>
          {t.rich('summary', {
            bold: (chunks) => <b>{chunks}</b>,
          })}
        </p>
        <p className='mt-6'>{t('leisure')}</p>
        <p className='mt-6'>{t('passion')}</p>
      </article>
      <article className='w-100 m-auto'>
        <hr className='my-5' />
        <p className='text-justify mt-2'>{t('extra_information')}</p>
        <div className='d-flex flex-column flex-xl-row flex-wrap my-8'>
          {extraInformation.map((el) => (
            <div key={el.title} className='mb-8'>
              <p className='font-bold mb-2'>{el.title}</p>
              <ul className='list-none flex flex-col'>{el.elements}</ul>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
