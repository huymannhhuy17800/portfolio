import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from "./Contact.module.scss";
export const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <div className={styles.bodyContainer}>
        <ul className={styles.contacts}>
          <li>
            <a>
              <img src={getImageUrl("contact/mail.svg")} alt="mail-icon" />
            </a>
            <span>huymanhhuy178@gmail.com</span>
          </li>
          <li>
            <a>
              <img src={getImageUrl("contact/phone.svg")} alt="phone.icon" />
            </a>
            <span>+84902744495</span>
          </li>
          <li>
            <a>
              <img src={getImageUrl("contact/map.svg")} alt="map-icon" />
            </a>
            <span>Vinh Loc B, Binh Chanh, Ho Chi Minh</span>
          </li>
        </ul>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input
              placeholder="Kai Havertz"
              type="text"
              name="Name"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              placeholder="kai.havertz178@gmail.com"
              type="text"
              name="email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Message</label>
            <textarea
              placeholder="Type your message here"
              name="email"
              className={styles.textarea}
            />
          </div>
          <button type="submit">
            Send! <img src={getImageUrl("contact/send.svg")} alt="send-icon" />
          </button>
        </form>
        <img
          src={getImageUrl("sample.png")}
          alt="sample-img"
          className={styles.sampleImg}
        />
      </div>
    </section>
  );
};
