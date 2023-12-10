"use client";

import classes from "./page.module.scss";

import Navbar from "./components/Navbar";
import { Cover } from "./components/Cover";

export default function Home() {
  return (
    <main className={classes.main}>
      <Navbar />
      <Cover />
      Kısmet Sultan App
    </main>
  );
}
