import type { NextPage } from "next";
import React from "react";
import { trpc } from "../utils/trpc";

const TrpcTest: NextPage = () => {
  const hello = trpc.useQuery(["hello", "user123"]);
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-blue dark:text-white">
        {hello.data ? hello.data.greeting : "Loading..."}
      </h1>
    </main>
  );
};

export default TrpcTest;
