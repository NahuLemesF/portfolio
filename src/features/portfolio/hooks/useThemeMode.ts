import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";

export function useThemeMode(defaultDark = true) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return defaultDark;

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    return defaultDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  return {
    isDark,
    toggleTheme: () => setIsDark((current) => !current),
  };
}
