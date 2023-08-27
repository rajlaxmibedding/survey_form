import React from "react";
import companyLogo from "../assets/logo.jpg";
import "./styles.css";

const Header = () => {
  return (
    <div className="img-container">
      <img src={companyLogo} alt="Rajlaxmi Bedding Store logo" />
    </div>
  );
};

export default Header;
