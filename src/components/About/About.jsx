import React from "react";
import styles from "./About.module.scss";
import { getImageUrl } from "../../utils";
import { Slideshow } from "./Slideshow";
import { MacTerminal } from "./MacTerminal";

export const About = () => {
  return (
    <section className={styles.container} id="#about">
      <h1 className={styles.title}>About me</h1>
      <div className={styles.content}>
        <Slideshow />
        <MacTerminal />
      </div>
    </section>
  );
};
