import React from "react";
import "./styles.scss";
export const Footer = () => {
  return (
    <div className="footer">
      Made with 🩵 by Manh Huy Nguyen &copy;
      {new Date().getFullYear()}
    </div>
  );
};
