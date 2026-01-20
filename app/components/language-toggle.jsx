'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Captura el hash inicial y actualiza cuando cambia
    setHash(window.location.hash || '');
    const onHashChange = () => setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Obtener el locale del pathname
  const LOCALES = ['en', 'es', 'pt'];
  const segments = pathname.split('/');
  const locale = segments[1];
  
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages.find(lang => lang.code === 'es');

  const handleLanguageChange = (newLocale) => {
    // Si el primer segmento es un locale, lo removemos; si no, preservamos el pathname tal cual
    const isFirstSegmentLocale = LOCALES.includes(locale);
    const rest = isFirstSegmentLocale ? `/${segments.slice(2).join('/')}` : pathname;
    // Normalizamos el resto para evitar doble barra en la raíz
    const normalizedRest = rest === '/' ? '' : rest;

    const search = searchParams.toString();
    const query = search ? `?${search}` : '';
    const hashSuffix = hash || '';

    const newUrl = `/${newLocale}${normalizedRest}${query}${hashSuffix}`;
    
    setIsOpen(false);
    // Usar window.location para forzar recarga completa
    window.location.href = newUrl;
  };

  const getNewPathname = (newLocale) => {
    // Si el primer segmento es un locale, lo removemos; si no, preservamos el pathname tal cual
    const isFirstSegmentLocale = LOCALES.includes(locale);
    const rest = isFirstSegmentLocale ? `/${segments.slice(2).join('/')}` : pathname;
    // Normalizamos el resto para evitar doble barra en la raíz
    const normalizedRest = rest === '/' ? '' : rest;

    const search = searchParams.toString();
    const query = search ? `?${search}` : '';
    const hashSuffix = hash || '';

    return `/${newLocale}${normalizedRest}${query}${hashSuffix}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-white hover:cursor-pointer"
        aria-label="Cambiar idioma"
        aria-expanded={isOpen}
        title="Cambiar idioma"
      >
        <span className="text-lg">🌐</span>
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
          <ul className="py-0 ">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:cursor-pointer ${
                    locale === lang.code
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
