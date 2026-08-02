"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function LanguageToggle() {
  const pathname = usePathname();
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);

  const updateMenuPosition = useCallback(() => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setMenuPosition({
      top: rect.bottom + 12,
      right: Math.max(8, window.innerWidth - rect.right),
      width: 224,
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [isOpen, updateMenuPosition]);

  // Obtener el locale del pathname
  const segments = pathname.split("/");
  const locale = segments[1];

  const languages = [
    { code: "en", label: "English 🇺🇸" },
    { code: "es", label: "Español 🇪🇸" },
    { code: "pt", label: "Português 🇧🇷" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale) ||
    languages.find((lang) => lang.code === "es");

  const handleLanguageChange = (newLocale) => {
    const newUrl = `/${newLocale}`;

    setIsOpen(false);
    // Usar window.location para forzar recarga completa
    window.location.href = newUrl;
  };

  return (
    <div className="relative z-50">
      <button
        ref={buttonRef}
        onClick={() => {
          updateMenuPosition();
          setIsOpen(!isOpen);
        }}
        className="
            group flex items-center gap-2
            rounded-xl
            border
            px-2 py-1 ml-2
            backdrop-blur-xl
            transition-all duration-300
            cursor-pointer
          "
        aria-label="Cambiar idioma"
        aria-expanded={isOpen}
      >
        <span
          className="
          flex h-7 w-7 items-center justify-center
          rounded-lg
          text-lg
        "
        >
          🌐
        </span>

        <span className="text-sm font-semibold tracking-wide">
          {currentLanguage?.code.toUpperCase()}
        </span>

        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isMounted && isOpen && menuPosition
        ? createPortal(
            <div
              style={menuPosition}
              className="
                fixed z-[1100]
                overflow-hidden rounded-2xl
                border border-border/70
                bg-background/90
                text-foreground
                backdrop-blur-[5px]
                ring-1 ring-white/10
                shadow-2xl shadow-black/50
                supports-[backdrop-filter]:bg-background/70
              "
            >
              <ul className="p-2">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`
                  flex w-full items-center justify-between
                  rounded-xl
                  px-4 py-3
                  text-sm
                  mb-1
                  transition-all duration-200
                  cursor-pointer
                `}
                    >
                      <span className="font-medium">{lang.label}</span>

                      {locale === lang.code && (
                        <span
                          className="
                      flex h-5 w-5
                      items-center justify-center
                      rounded-full
                      bg-white/20
                      text-xs
                    "
                        >
                          ✓
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
