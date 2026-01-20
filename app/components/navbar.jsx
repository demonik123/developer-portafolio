// @flow strict
'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeToggle from "./helper/theme-toggle";
import LanguageToggle from "./language-toggle";


function Navbar({ locale = 'en' }) {
  const t = useTranslations('navigation');
  return (
    <nav className="sticky top-0 z-[1000] w-full backdrop-blur supports-[backdrop-filter]:bg-background border-b border-border bg-background">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href={`/${locale}`}
            className="text-primary text-2xl font-bold tracking-tight">
            BORIS LEONEL
          </Link>
        </div>

        <ul className="mt-0 flex w-auto flex-row items-center gap-1 text-sm md:space-x-1" id="navbar-default">
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href={`/${locale}#about`}>
              <div className="text-sm text-foreground opacity-80 hover:opacity-100">{t('about')}</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href={`/${locale}#experience`}><div className="text-sm text-foreground opacity-80 hover:opacity-100">{t('experience')}</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href={`/${locale}#skills`}><div className="text-sm text-foreground opacity-80 hover:opacity-100">{t('skills')}</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href={`/${locale}#education`}><div className="text-sm text-foreground opacity-80 hover:opacity-100">{t('education')}</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/blog"><div className="text-sm text-foreground opacity-80 hover:opacity-100">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href={`/${locale}#projects`}><div className="text-sm text-foreground opacity-80 hover:opacity-100">{t('projects')}</div></Link>
          </li>
          <li className="pl-2"><LanguageToggle /></li>
          <li className="pl-2"><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;