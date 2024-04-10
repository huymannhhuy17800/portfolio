import React from "react";
import styles from "./Skill.module.scss";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { SkillCard } from "./SkillCard";
export const Skill = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.marquee}>
        <ul className={styles.marqueeContent}>
          {skills.map((skill, key) => {
            return <SkillCard key={key} skill={skill} />;
          })}
        </ul>
        <ul className={styles.marqueeContent}>
          {skills.map((skill, key) => {
            return (
              <SkillCard key={key} skill={skill} className={styles.card} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
