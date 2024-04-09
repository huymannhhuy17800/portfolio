import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { getImageUrl } from "../../utils";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
              ? getImageUrl("nav/close.png")
              : getImageUrl("nav/menu.png")
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
          <li>
            <a href="#interest">Interest</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
