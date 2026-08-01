// @flow strict
"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./helper/theme-toggle";
import LanguageToggle from "./language-toggle";

const sectionIds = [
  "about",
  "experience",
  "skills",
  "education",
  "projects",
  "contact",
];

function Navbar() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const mobileLinkClass = (section) =>
    `relative block px-4 py-3 rounded-md border transition-all duration-300 ${
      activeSection === section
        ? "border-primary bg-primary text-primary-foreground font-semibold shadow-md ring-2 ring-primary/30 translate-x-1"
        : "border-transparent text-foreground/80 hover:bg-muted/60"
    }`;
  const desktopLinkClass = (section) =>
    `block px-3 py-2 rounded-md border transition-all duration-300 ${
      activeSection === section
        ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm ring-2 ring-primary/25"
        : "border-transparent text-foreground/80 hover:bg-muted/60 hover:text-foreground"
    }`;

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let currentSection = "";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = sectionId;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[1000] w-full backdrop-blur supports-[backdrop-filter]:bg-background border-b border-border bg-background">
      <div className="flex items-center justify-between py-4 px-4 md:px-0">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href={`/${locale}`}
            className="text-primary text-xl md:text-2xl font-bold tracking-tight"
          >
            BORIS LEONEL
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex w-auto flex-row items-center gap-1 text-sm md:space-x-1"
          id="navbar-default"
        >
          <li>
            <Link
              className={desktopLinkClass("about")}
              href={`/${locale}#about`}
              aria-current={activeSection === "about" ? "location" : undefined}
            >
              <div className="text-sm">
                {t("about")}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={desktopLinkClass("experience")}
              href={`/${locale}#experience`}
              aria-current={
                activeSection === "experience" ? "location" : undefined
              }
            >
              <div className="text-sm">
                {t("experience")}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={desktopLinkClass("skills")}
              href={`/${locale}#skills`}
              aria-current={activeSection === "skills" ? "location" : undefined}
            >
              <div className="text-sm">
                {t("skills")}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={desktopLinkClass("education")}
              href={`/${locale}#education`}
              aria-current={
                activeSection === "education" ? "location" : undefined
              }
            >
              <div className="text-sm">
                {t("education")}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={desktopLinkClass("projects")}
              href={`/${locale}#projects`}
              aria-current={
                activeSection === "projects" ? "location" : undefined
              }
            >
              <div className="text-sm">
                {t("projects")}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={desktopLinkClass("contact")}
              href={`/${locale}#contact`}
              aria-current={
                activeSection === "contact" ? "location" : undefined
              }
            >
              <div className="text-sm">
                {t("contact")}
              </div>
            </Link>
          </li>
          <li className="pl-2">
            <LanguageToggle />
          </li>
          <li className="pl-2">
            <ThemeToggle />
          </li>
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
            {isOpen ? (
              <HiX size={24} className="text-foreground" />
            ) : (
              <HiMenu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col py-4 px-4 space-y-2">
            <li>
              <Link
                className={mobileLinkClass("about")}
                href={`/${locale}#about`}
                onClick={() => {
                  setActiveSection("about");
                  closeMenu();
                }}
                aria-current={activeSection === "about" ? "location" : undefined}
              >
                <div className="text-base">
                  {t("about")}
                </div>
              </Link>
            </li>
            <li>
              <Link
                className={mobileLinkClass("experience")}
                href={`/${locale}#experience`}
                onClick={() => {
                  setActiveSection("experience");
                  closeMenu();
                }}
                aria-current={
                  activeSection === "experience" ? "location" : undefined
                }
              >
                <div className="text-base">
                  {t("experience")}
                </div>
              </Link>
            </li>
            <li>
              <Link
                className={mobileLinkClass("skills")}
                href={`/${locale}#skills`}
                onClick={() => {
                  setActiveSection("skills");
                  closeMenu();
                }}
                aria-current={
                  activeSection === "skills" ? "location" : undefined
                }
              >
                <div className="text-base">
                  {t("skills")}
                </div>
              </Link>
            </li>
            <li>
              <Link
                className={mobileLinkClass("education")}
                href={`/${locale}#education`}
                onClick={() => {
                  setActiveSection("education");
                  closeMenu();
                }}
                aria-current={
                  activeSection === "education" ? "location" : undefined
                }
              >
                <div className="text-base">
                  {t("education")}
                </div>
              </Link>
            </li>
            <li>
              <Link
                className={mobileLinkClass("projects")}
                href={`/${locale}#projects`}
                onClick={() => {
                  setActiveSection("projects");
                  closeMenu();
                }}
                aria-current={
                  activeSection === "projects" ? "location" : undefined
                }
              >
                <div className="text-base">
                  {t("projects")}
                </div>
              </Link>
            </li>
            <li>
              <Link
                className={mobileLinkClass("contact")}
                href={`/${locale}#contact`}
                onClick={() => {
                  setActiveSection("contact");
                  closeMenu();
                }}
                aria-current={
                  activeSection === "contact" ? "location" : undefined
                }
              >
                <div className="text-base">
                  {t("contact")}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
