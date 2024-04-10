import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";
import { Contact } from "./components/Contact/Contact";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
