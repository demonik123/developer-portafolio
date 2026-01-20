'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function LanguageToggle() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: t('english') },
    { code: 'es', label: t('spanish') },
    { code: 'pt', label: t('portuguese') }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-white"
        aria-label="Cambiar idioma"
        title="Cambiar idioma"
      >
        <span className="text-lg">🌐</span>
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
          <ul className="py-2">
            {languages.map((lang) => (
              <li key={lang.code}>
                <Link
                  href={`/${lang.code}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    locale === lang.code
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {lang.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
