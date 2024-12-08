import React from 'react';
import Image from 'next/image';

import { booksList, designations, moviesList, musicList } from './consts';
import styles from './page.module.scss';

const extraInformation = [
  {
    title: 'Some of my favorite movies',
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
    title: 'Some of my favorite books',
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
    title: 'Some of my favorite songs',
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

export default function About() {
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
          {designations.map((d, i) => (
            <div key={d} className='inline-block'>
              &nbsp;
              <span>
                <b>{d}</b>
              </span>
              &nbsp;
              {i < designations.length - 1 ? (
                <span className='text-main-dark'>|</span>
              ) : null}
            </div>
          ))}
        </div>
        <p className='mt-6'>
          Hello there! My name is <b>Jacobo Jaramillo</b>, an Electronic
          Engineer turned Software Developer. I went to Germany in 2017 to study
          a MSc. in Electrical Engineering and IT, and stayed until 2021, when I
          came back to my home country, Colombia. I have been working in
          software development in the areas of IoT, Machine Learning, and
          Telecommunications. I consider myself to be a disciplined and
          resilient person, always keen to learn and open to get involved in
          different areas.
        </p>
        <p className='mt-6'>
          In my leisure time, I&apos;m usually playing tennis, riding my
          motorcycle, spending some time with my family or friends, and of
          course, hitting the keyboard.
        </p>
        <p className='mt-6'>
          One of my other passions is to learn new stuff (I know, it sounds
          cliché). I&apos;m usually learning something, be it tech-related, or
          something random such as Mongol history (I love history, BTW).
        </p>
      </article>
      <article className='w-100 m-auto'>
        <hr className='my-5' />
        <p className='text-justify mt-2'>
          I truly think you don&apos;t only hire a developer, but a human being.
          So in case you&apos;re interested, here&apos;s some extra information
          about me.
        </p>
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
