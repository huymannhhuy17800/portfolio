import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
