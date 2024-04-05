import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello, I'm Huy Nguyen <img src={getImageUrl("hero/vietnam.png")} />
        </h1>
        <h2 className={styles.role}>{"<Chicken Developer/>"}</h2>
        <h3 className={styles.description}>
          I'm currently working at FPT software, my goal is to become full-stack
          developer. This web was created while I'm learning React
        </h3>
        <ul className={styles.contact}>
          <li>
            <img src={getImageUrl("hero/contact/github.png")} />
          </li>
          <li>
            <img src={getImageUrl("hero/contact/linkedin.png")} />
          </li>
          <li>
            <img src={getImageUrl("hero/contact/mail.png")} />
          </li>
          <li>
            <img src={getImageUrl("hero/contact/facebook.png")} />
          </li>
          <li>
            <img src={getImageUrl("hero/contact/twitter.png")} />
          </li>
        </ul>
        <a className={styles.button}>Know more 😎</a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        className={styles.heroImg}
        alt="hero-img"
      />
    </section>
  );
};
