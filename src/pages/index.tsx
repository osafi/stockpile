import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ThemeToggle } from "@components/theme/ThemeToggle";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stockpile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-blue dark:text-white">Hello world!</h1>
        <ThemeToggle />
      </main>
    </div>
  );
};

export default Home;
