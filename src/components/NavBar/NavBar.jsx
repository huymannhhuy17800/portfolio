import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
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
            <img src={getImageUrl("nav/icon/about.png")} alt="" />
            <a href="#about">About</a>
          </li>
          <li>
            <img src={getImageUrl("nav/icon/skills.png")} alt="" />
            <a href="#skills">Skills</a>
          </li>
          <li>
            <img src={getImageUrl("nav/icon/experience.png")} alt="" />
            <a href="#experience">Experiences</a>
          </li>
          <li>
            <img src={getImageUrl("nav/icon/contact.png")} alt="" />
            <a href="#contact">Contact</a>
          </li>
          <li>
            <img />
            <a href="#interest">Interest Zone</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
