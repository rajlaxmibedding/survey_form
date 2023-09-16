import React from "react";
import companyLogo from "../assets/logo.jpg";
import "./styles.css";

const Header = ({ isSuccessError = false }) => {
  return (
    <div
      className={
        isSuccessError
          ? "success-error-header-img-container"
          : "header-img-container"
      }
    >
      <img src={companyLogo} alt="Rajlaxmi Bedding Store logo" />
    </div>
  );
};

export default Header;
