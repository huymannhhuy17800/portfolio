import React from "react";
import styles from "./About.module.scss";
import { getImageUrl } from "../../utils";
import { Slideshow } from "./Slideshow";

export const About = () => {
  return (
    <section className={styles.container} id="#about">
      <h1 className={styles.title}>About me</h1>
      <div className={styles.content}>
        <Slideshow />
        <ul className={styles.aboutItems}>
          <li>
            <img />
            <p>
              Base in Saigon, Ex-FPT University student, passionate in reading
              books, manga, watching anime, films.
            </p>
          </li>
          <li>
            <img />
            <p>
              Got a first job as Mendix developer ,currently have Advanced
              mendix developer certificate, first money was made ^^
            </p>
          </li>
          <li>
            <img />
            <p>
              Tirelessly learning Reactjs at the moment, falling in love
              creating web frontend Target: make some completed UI in 2024
            </p>
          </li>
          <li>
            <img />
            <p>
              My objective is becoming fullstack developer, make some useful web
              app for people. I am also eager to traveling to Japan
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
