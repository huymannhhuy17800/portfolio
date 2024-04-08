import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { Slideshow } from "./Slideshow";

export const About = () => {
  return (
    <section className={styles.container} id="#about">
      <h1 className={styles.title}>About me</h1>
      <div className={styles.content}>
        <Slideshow />
        <div>
          <p>
            some text here, add some wall of text wall of textwall of textwall
            of textwall of text wall of textwall of textwall of textwall of text
            wall of textwall of textwall of textwall of textwall of textwall of
            textwall of textwall of text wall of textwall of textwall of
            textwall of textwall of textwall of textwall of textwall of text
            wall of textwall of textwall of textwall of textwall of textwall of
            textwall of textwall of text wall of textwall of textwall of
            textwall of textwall of textwall of textwall of textwall of text{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
