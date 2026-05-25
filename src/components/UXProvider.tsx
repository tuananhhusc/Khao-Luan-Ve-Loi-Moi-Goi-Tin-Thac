"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "sepia";
type FontSize = "font-sm" | "font-md" | "font-lg" | "font-xl";

interface UXContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
}

const UXContext = createContext<UXContextType | undefined>(undefined);

export function UXProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [fontSize, setFontSizeState] = useState<FontSize>("font-md");

  useEffect(() => {
    // Read from localStorage on mount
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    const savedFontSize = (localStorage.getItem("fontSize") as FontSize) || "font-md";
    setThemeState(savedTheme);
    setFontSizeState(savedFontSize);

    // Synchronize DOM classes to ensure they match state on hydration
    const html = document.documentElement;
    html.classList.remove("theme-dark", "theme-sepia");
    if (savedTheme === "dark") html.classList.add("theme-dark");
    if (savedTheme === "sepia") html.classList.add("theme-sepia");

    html.classList.remove("font-sm", "font-md", "font-lg", "font-xl");
    html.classList.add(savedFontSize);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    const html = document.documentElement;
    html.classList.remove("theme-dark", "theme-sepia");
    if (newTheme === "dark") html.classList.add("theme-dark");
    if (newTheme === "sepia") html.classList.add("theme-sepia");
  };

  const setFontSize = (newSize: FontSize) => {
    setFontSizeState(newSize);
    localStorage.setItem("fontSize", newSize);
    const html = document.documentElement;
    html.classList.remove("font-sm", "font-md", "font-lg", "font-xl");
    html.classList.add(newSize);
  };

  return (
    <UXContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </UXContext.Provider>
  );
}

export function useUX() {
  const context = useContext(UXContext);
  if (!context) throw new Error("useUX must be used within a UXProvider");
  return context;
}
