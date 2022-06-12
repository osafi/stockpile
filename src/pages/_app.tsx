import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "@components/theme/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
