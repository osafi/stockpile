import "../styles/globals.css";
import { ThemeProvider } from "@components/theme/ThemeProvider";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "./api/trpc/[trpc]";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      /**
       * If you want to use SSR, you need to use the server's full URL
       * @link https://trpc.io/docs/ssr
       */
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(App);
