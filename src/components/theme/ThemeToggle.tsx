import React, { useEffect, useState } from "react";
import { useTheme } from "./useTheme";

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <input type="checkbox" aria-label="Toggle Theme" checked={isDark} onChange={toggleTheme} />;
};
