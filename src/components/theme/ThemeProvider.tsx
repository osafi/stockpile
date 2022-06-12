import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <NextThemesProvider defaultTheme="system" attribute="class">
    {children}
  </NextThemesProvider>
);
