import React from "react";
import styles from "./Slide.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Slideshow = () => {
  const buttonStyle = {
    width: "20px",
    height: "20px",
    background: "red",
    border: "1 solid black",
    padding: "5px",
    margin: "-20px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg></svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg></svg>
      </button>
    ),
  };
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <div className={styles.container}>
      <Slide {...properties}>
        <div className={styles.slideEffect}>
          <div style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        <div className={styles.slideEffect}>
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className={styles.slideEffect}>
          <div style={{ backgroundImage: `url(${images[2]})` }}> </div>
        </div>
      </Slide>
    </div>
  );
};
