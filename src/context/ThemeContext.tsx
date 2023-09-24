import React, { useState, useContext, useEffect } from "react";
import { useInitialTheme } from "../hooks/useInitialTheme";

const DefaultThemeContext = {
  theme: "",
  setTheme: (theme: string) => {
    theme;
  },
};

const ThemeContext = React.createContext(DefaultThemeContext);
const initialTheme = useInitialTheme();
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(initialTheme);
  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
