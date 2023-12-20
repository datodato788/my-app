"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};