import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <button onClick={() => console.log("clicked")}>Submit</button>
      <div>
        <p>Store info</p>
      </div>
    </div>
  );
};

export default Footer;
