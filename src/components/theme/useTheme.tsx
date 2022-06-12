import { useTheme as useNextTheme } from "next-themes";
import { useCallback } from "react";

export const useTheme = () => {
  const { setTheme, resolvedTheme } = useNextTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }, [setTheme, resolvedTheme]);

  return { toggleTheme, isDark: resolvedTheme === "dark" };
};