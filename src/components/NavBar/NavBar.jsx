import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { getImageUrl } from "../../utils";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {"<Portfolio/>"}
      </a>
      <div className={styles.menu}>
        <img
          alt="menu-btn"
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/close.svg")
              : getImageUrl("nav/hamburger.svg")
          }
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <img
            src={
              mode
                ? getImageUrl("mode/light.svg")
                : getImageUrl("mode/dark.svg")
            }
            alt="mode-icon"
            className={styles.mode}
            onClick={toggleMode}
          />
        </ul>
      </div>
    </nav>
  );
};
