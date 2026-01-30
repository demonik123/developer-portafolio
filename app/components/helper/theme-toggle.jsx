"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize from localStorage or system preference
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    sendGTMEvent({
      event: "click_theme_toggle",
      section: "footer",
    });
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (_) {}
  };

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background shadow-subtle hover:bg-muted/70 transition-colors hover:cursor-pointer"
    >
      {isDark ? (
        <FiSun className="text-foreground" />
      ) : (
        <FiMoon className="text-foreground" />
      )}
    </button>
  );
}
