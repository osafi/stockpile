import { act, renderHook, waitFor } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";

beforeEach(() => {
  // cleanup side effects
  setDeviceTheme("light");
  document.documentElement.style.colorScheme = "";
  document.documentElement.removeAttribute("class");
});

it("should provide selected theme", async () => {
  const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

  await waitFor(() => {
    expect(result.current.isDark).toEqual(false);
  });
});

it("should toggle the selected theme", async () => {
  const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

  await waitFor(() => {
    expect(result.current.isDark).toEqual(false);
    expect(document.documentElement.getAttribute("class")).toEqual("light");
  });

  act(() => {
    result.current.toggleTheme();
  });

  await waitFor(() => {
    expect(result.current.isDark).toEqual(true);
    expect(document.documentElement.getAttribute("class")).toEqual("dark");
  });
});

function setDeviceTheme(theme: "light" | "dark") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: theme === "dark",
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
