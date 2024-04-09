import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
