import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import { NotFoundPage } from '@/components';

export default async function NotFound() {
  setRequestLocale('en');
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <NotFoundPage />
    </NextIntlClientProvider>
  );
}
