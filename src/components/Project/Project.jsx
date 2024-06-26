import React from "react";
import styles from "./Project.module.scss";
import { ProjectCard } from "./ProjectCard";
export const Project = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
