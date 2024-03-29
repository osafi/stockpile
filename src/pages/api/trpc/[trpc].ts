import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import superjson from "superjson";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("hello", {
    input: z.string(),
    resolve({ input }) {
      return {
        greeting: `hello ${input}`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
