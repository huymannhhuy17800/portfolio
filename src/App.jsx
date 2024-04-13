import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";
import { Contact } from "./components/Contact/Contact";
import { Divider, Divider2 } from "./components/Divider/Divider";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { TopButton } from "./components/TopButton/TopButton";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Divider2 />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Divider />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
