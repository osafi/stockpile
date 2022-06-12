import { fireEvent, render, screen } from "@testing-library/react";
import * as UseTheme from "./useTheme";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

it("can toggle the selected theme", async () => {
  jest.spyOn(UseTheme, "useTheme").mockImplementation(() => useThemeMock("dark"));

  render(<ThemeToggle />);

  expect(screen.getByRole("checkbox", { name: /toggle theme/i })).toBeChecked();

  fireEvent.click(screen.getByRole("checkbox", { name: /toggle theme/i }));

  expect(screen.getByRole("checkbox", { name: /toggle theme/i })).not.toBeChecked();
});

const useThemeMock = (initialTheme: "light" | "dark") => {
  const [theme, setTheme] = useState<string>(initialTheme);
  return {
    toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
    isDark: theme === "dark",
  };
};
