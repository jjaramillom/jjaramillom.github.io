'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import styles from './TypeWriter.module.scss';

const START_DELAY = 500;

export const TypeWriter = () => {
  const t = useTranslations('home');
  const [firstDelayedTypeWriterClass, setFirstDelayedTypewritterClass] =
    useState('');
  const [secondDelayedTypewritterClass, setSecondDelayedTypewritterClass] =
    useState('');

  useEffect(() => {
    const firstTimeout = setTimeout(
      () => setFirstDelayedTypewritterClass(styles.active),
      START_DELAY
    );
    const secondTimeout = setTimeout(() => {
      setFirstDelayedTypewritterClass('');
      setSecondDelayedTypewritterClass(styles.active);
    }, 4000 + START_DELAY);
    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <div className='text-center text-[18px] mt-2'>
      <div
        className={`inline-block ${styles.typewriter} ${firstDelayedTypeWriterClass} 
				${firstDelayedTypeWriterClass !== '' ? `${styles.active}` : ''}`}
        style={{
          opacity:
            firstDelayedTypeWriterClass === '' &&
            secondDelayedTypewritterClass === ''
              ? 0
              : 1,
        }}
      >
        <p>
          {t('type_writer.first')}
          <span className='inline-block'>&nbsp;</span>
        </p>
      </div>
      <div
        className={`inline-block ${styles.typewriter} ${secondDelayedTypewritterClass}`}
        style={{ opacity: secondDelayedTypewritterClass === '' ? 0 : 1 }}
      >
        <p>{t('type_writer.second')}</p>
      </div>
    </div>
  );
};
