import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Huy Nguyen</h1>
        <h2 className={styles.role}>{"<Chicken Developer/>"}</h2>
        <h3 className={styles.description}>
          I'm currently working at FPT software, my goal is to become full-stack
          developer. This web was created while I'm learning React{" "}
        </h3>
        <a className={styles.button}>Getting to know me 😊</a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        className={styles.heroImg}
        alt="hero-img"
      />
    </section>
  );
};
