import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./styles.css";

const Form = ({ surveyCode, surveyKey }) => {
  return (
    <div className="form-container">
      <Header />
      <Body surveyCode={surveyCode} surveyKey={surveyKey} />
      <Footer />
    </div>
  );
};

export default Form;
