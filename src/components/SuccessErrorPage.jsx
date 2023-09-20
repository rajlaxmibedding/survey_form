import React from "react";
import Header from "./Header";
import "./styles.css";
import Footer from "./Footer";
import successLogo from "../assets/icons8-correct.gif";
import errorLogo from "../assets/icons8-cancel.gif";

const SuccessErrorPage = ({
  message,
  isHeaderFooterRequired = true,
  isSuccess = false,
}) => {
  return (
    <div className="success-error-container">
      {isHeaderFooterRequired && <Header isSuccessError={true} />}
      <div className="success-error-img-message-wrapper">
        <div className="success-error-img-container">
          {isSuccess ? (
            <img src={successLogo} alt="Feedback summitted successfully logo" />
          ) : (
            <img src={errorLogo} alt="Error logo" />
          )}
        </div>
        <div className="success-error-message">
          <p className={isSuccess ? "success" : "error"}>{message[0]}</p>
          <p className={isSuccess ? "success" : "error"}>{message[1]}</p>
        </div>
      </div>
      {isHeaderFooterRequired && <Footer />}
    </div>
  );
};

export default SuccessErrorPage;
