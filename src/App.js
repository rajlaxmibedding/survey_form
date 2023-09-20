import React, { useEffect, useState } from "react";
import "./index.css";
import Form from "./components/Form";
import SuccessErrorPage from "./components/SuccessErrorPage";
import { checkServeyCode } from "./api/handler";

function App() {
  const [surveyCode, setSurveyCode] = useState(null);
  const [isSurveyCodeValid, setIsSurveyCodeValid] = useState(true);
  const [key, setKey] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const querySurveyCode = queryParams.get("surveyCode");

    if (querySurveyCode) {
      setSurveyCode(querySurveyCode);
    } else {
      setSurveyCode(null);
    }

    const validateCode = async () => {
      try {
        const { bookingIdExists, key, error } = await checkServeyCode(
          querySurveyCode
        );

        if (bookingIdExists !== undefined)
          setIsSurveyCodeValid(bookingIdExists);
        if (error !== undefined) setErrorMessage(error);
        if (key !== undefined) setKey(key);
      } catch (err) {
        setIsSurveyCodeValid(true);
        setErrorMessage([err, ""]);
      }
    };
    validateCode();
  }, []);

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  return (
    <div className="parent-container">
      {!isMobileDevice() ? (
        <SuccessErrorPage
          message={[
            "This survey is only available on mobile devices.",
            "Open this link in any mobile device or tablet.",
          ]}
        />
      ) : surveyCode === null ? (
        <SuccessErrorPage
          message={[
            "Invalid Link !!!",
            "Please contact our store to get a valid link.",
          ]}
        />
      ) : isSurveyCodeValid ? (
        <SuccessErrorPage
          message={[errorMessage?.[0] ?? "", errorMessage?.[1] ?? ""]}
        />
      ) : (
        <Form surveyCode={surveyCode} surveyKey={key} />
      )}
    </div>
  );
}

export default App;
