import React from "react";
import styles from "./SkillCard.module.scss";
import { getImageUrl } from "../../utils";

export const SkillCard = ({ skill: { name, srcImg } }) => {
  return (
    <li className={styles.container}>
      <img src={getImageUrl(srcImg)} alt={name} />
      <h3>{name}</h3>
    </li>
  );
};
