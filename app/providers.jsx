'use client';

import { NextIntlClientProvider } from 'next-intl';

export function IntlProvider({ children, messages, locale, timeZone = 'UTC' }) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}
