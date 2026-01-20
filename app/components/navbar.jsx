// @flow strict
'use client';

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./helper/theme-toggle";
import LanguageToggle from "./language-toggle";


function Navbar() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-[1000] w-full backdrop-blur supports-[backdrop-filter]:bg-background border-b border-border bg-background">
      <div className="flex items-center justify-between py-4 px-4 md:px-0">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href={`/${locale}`}
            className="text-primary text-xl md:text-2xl font-bold tracking-tight">
            BORIS LEONEL
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-auto flex-row items-center gap-1 text-sm md:space-x-1" id="navbar-default">
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
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href={`/${locale}#projects`}><div className="text-sm text-foreground opacity-80 hover:opacity-100">{t('projects')}</div></Link>
          </li>
          <li className="pl-2"><LanguageToggle /></li>
          <li className="pl-2"><ThemeToggle /></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-muted/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} className="text-foreground" /> : <HiMenu size={24} className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col py-4 px-4 space-y-2">
            <li>
              <Link 
                className="block px-4 py-3 rounded-md hover:bg-muted/60 transition-colors" 
                href={`/${locale}#about`}
                onClick={closeMenu}
              >
                <div className="text-base text-foreground opacity-80 hover:opacity-100">{t('about')}</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 rounded-md hover:bg-muted/60 transition-colors" 
                href={`/${locale}#experience`}
                onClick={closeMenu}
              >
                <div className="text-base text-foreground opacity-80 hover:opacity-100">{t('experience')}</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 rounded-md hover:bg-muted/60 transition-colors" 
                href={`/${locale}#skills`}
                onClick={closeMenu}
              >
                <div className="text-base text-foreground opacity-80 hover:opacity-100">{t('skills')}</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 rounded-md hover:bg-muted/60 transition-colors" 
                href={`/${locale}#education`}
                onClick={closeMenu}
              >
                <div className="text-base text-foreground opacity-80 hover:opacity-100">{t('education')}</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 rounded-md hover:bg-muted/60 transition-colors" 
                href={`/${locale}#projects`}
                onClick={closeMenu}
              >
                <div className="text-base text-foreground opacity-80 hover:opacity-100">{t('projects')}</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;