import React from "react";
import styles from "./Hero.module.scss";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Hi, I am Huy Nguyen</h1>
          <h2 className={styles.role}>Chicken Developer</h2>
          <h3 className={styles.description}>
            I'm currently working at FPT software, my goal is to become
            full-stack developer. This web was created while I'm learning React
          </h3>
        </div>
        <div>
          <ul className={styles.contact}>
            <li>
              <img
                src={getImageUrl("hero/contact/github.png")}
                alt="github-icon"
              />
            </li>
            <li>
              <img
                src={getImageUrl("hero/contact/linkedin.png")}
                alt="linkedin-icon"
              />
            </li>
            <li>
              <img src={getImageUrl("hero/contact/mail.png")} alt="mail-icon" />
            </li>
            <li>
              <img
                src={getImageUrl("hero/contact/facebook.png")}
                alt="fb-icon"
              />
            </li>
            <li>
              <img
                src={getImageUrl("hero/contact/twitter.png")}
                alt="contact-icon"
              />
            </li>
          </ul>
        </div>
        <a className={styles.button}>Know More 😎</a>
      </div>
      <img
        src={getImageUrl("hero/superman.png")}
        alt="superman-icon"
        className={styles.supImg}
      />
      <img
        src={getImageUrl("hero/hero.png")}
        className={styles.heroImg}
        alt="hero-img"
      />
    </section>
  );
};
