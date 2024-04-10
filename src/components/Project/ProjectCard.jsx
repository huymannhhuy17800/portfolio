import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from "./ProjectCard.module.scss";
export const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <h2>Project name: Sample project name</h2>
      <img
        src={getImageUrl("bg.png")}
        alt="sample-img"
        className={styles.thumbnail}
      />
      <div className={styles.description}>
        <p>
          This is my project, use to pratice coding. Anything relate to this
          consider demo, not for enterprise.
        </p>
      </div>
      <div className={styles.actions}>
        <a href="">
          <img src={getImageUrl("project/demo.png")} alt="demo" />
        </a>
        <a href="">
          <img src={getImageUrl("project/usecase.png")} alt="use-case" />
        </a>
        <a href="">
          <img src={getImageUrl("project/source.png")} alt="source" />
        </a>
      </div>
    </div>
  );
};
