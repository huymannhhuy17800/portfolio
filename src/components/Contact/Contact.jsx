import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from "./Contact.module.scss";
export const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <ul className={styles.contacts}>
        <li>
          <a>
            <img src={getImageUrl("contact/mail.svg")} />
          </a>
          <span>huymanhhuy178@gmail.com</span>
        </li>
        <li>
          <a>
            <img src={getImageUrl("contact/mail.png")} />
          </a>
          <span>+84902744495</span>
        </li>
        <li>
          <a>
            <img src={getImageUrl("contact/mail.png")} />
          </a>
          <span>Vinh Loc B, Binh Chanh, Ho Chi Minh</span>
        </li>
      </ul>
    </section>
  );
};
