import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";
import { Contact } from "./components/Contact/Contact";
import { Divider } from "./components/Divider/Divider";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
