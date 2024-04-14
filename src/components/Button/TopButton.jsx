import React, { useState } from "react";
import styles from "./TopButton.module.scss";
import { getImageUrl } from "../../utils";

export const TopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={styles.button}
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <img src={getImageUrl("up.svg")} alt="up-icon" />
    </button>
  );
};
