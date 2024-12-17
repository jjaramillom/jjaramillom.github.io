import { useTranslations } from 'next-intl';

import { Title } from './Title';

export const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <Title className='font-[300] leading-tight'>
      <div className='text-orange mb-3'>404</div>
      {t('not_found')}
    </Title>
  );
};
