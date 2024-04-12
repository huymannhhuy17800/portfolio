import React from "react";
import styles from "./Divider.module.scss";
export const Divider = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
    </div>
  );
};
