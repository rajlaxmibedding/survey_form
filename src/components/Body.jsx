import React, { useState } from "react";
import "./styles.css";
import { Rating } from "react-simple-star-rating";
import { submitSurveyResponse } from "../api/handler";
import SuccessErrorPage from "./SuccessErrorPage";

const Body = ({ surveyCode, surveyKey }) => {
  const [characterCounter, setCharacterCounter] = useState(0);
  const [comments, setComments] = useState("");
  const [ratings, setRatings] = useState({
    rating1: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,
  });
  const [isFilled, setIsFilled] = useState(true);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleSubmit = async () => {
    if (Object.values(ratings).includes(0)) {
      setIsFilled(false);
      return;
    }
    setIsFilled(true);
    var response_body = {
      surveyCode: surveyCode,
      key: surveyKey, //317981,
      ...ratings,
    };
    if (comments.length > 0) response_body["comments"] = comments;

    const { error, message } = await submitSurveyResponse(response_body);

    if (error !== undefined) {
      setIsSubmitSuccess(false);
      setSubmissionMessage(error);
    } else {
      setIsSubmitSuccess(true);
      setSubmissionMessage(message);
    }
  };

  return (
    <div className="body-container">
      {isSubmitSuccess === null && (
        <>
          <div className="body-header-text-container">
            <p className="text-large">HELP US IMPROVE</p>
            <p className="text-small">Thank you for your feedback</p>
          </div>
          <div className="body-question-text-container">
            <div className="question-segment">
              <p className="text-medium">
                How satisfied are you with the quality of our products?
                <span className="mandatory-asterix">*</span>
              </p>
              <div className="rating-stars">
                <Rating
                  onClick={(value) =>
                    setRatings({ ...ratings, rating1: value })
                  }
                  size="2rem"
                  fillColor="#687047"
                  emptyColor="#d9dec5"
                  SVGstorkeWidth="0.5"
                  SVGstrokeColor="#687047"
                />
              </div>
            </div>
            <div className="question-segment">
              <p className="text-medium">
                Was the price of the product reasonable?
                <span className="mandatory-asterix">*</span>
              </p>
              <div className="rating-stars">
                <Rating
                  onClick={(value) =>
                    setRatings({ ...ratings, rating2: value })
                  }
                  size="2rem"
                  fillColor="#687047"
                  emptyColor="#d9dec5"
                  SVGstorkeWidth="0.5"
                  SVGstrokeColor="#687047"
                />
              </div>
            </div>
            <div className="question-segment">
              <p className="text-medium">
                How would you rate our staff behavior?
                <span className="mandatory-asterix">*</span>
              </p>
              <div className="rating-stars">
                <Rating
                  onClick={(value) =>
                    setRatings({ ...ratings, rating3: value })
                  }
                  size="2rem"
                  fillColor="#687047"
                  emptyColor="#d9dec5"
                  SVGstorkeWidth="0.5"
                  SVGstrokeColor="#687047"
                />
              </div>
            </div>
            <div className="question-segment">
              <p className="text-medium">
                How would you rate our stitching & delivery unit?
                <span className="mandatory-asterix">*</span>
              </p>
              <div className="rating-stars">
                <Rating
                  onClick={(value) =>
                    setRatings({ ...ratings, rating4: value })
                  }
                  size="2rem"
                  fillColor="#687047"
                  emptyColor="#d9dec5"
                  SVGstorkeWidth="0.5"
                  SVGstrokeColor="#687047"
                />
              </div>
            </div>
            <div className="question-segment">
              <p className="text-medium">
                How would you rate your overall experience with our company?
                <span className="mandatory-asterix">*</span>
              </p>
              <div className="rating-stars">
                <Rating
                  onClick={(value) =>
                    setRatings({ ...ratings, rating5: value })
                  }
                  size="2rem"
                  fillColor="#687047"
                  emptyColor="#d9dec5"
                  SVGstorkeWidth="0.5"
                  SVGstrokeColor="#687047"
                />
              </div>
            </div>
            <div className="question-segment">
              <p className="text-medium">Any other suggestions?</p>
              <div className="comments-text-area">
                <textarea
                  value={comments}
                  maxLength={100}
                  rows={1}
                  onChange={(event) => {
                    const updatedComment = event.target.value.replace(
                      /[\n\r]/g,
                      ""
                    );
                    setCharacterCounter(updatedComment.length);
                    setComments(updatedComment);
                    // console.log(updatedComment);
                  }}
                />
                <p>{characterCounter} / 100</p>
              </div>
            </div>
          </div>
          <div className="button-container">
            {!isFilled && (
              <p className="mandatory-asterix">
                Please fill all mandatory fields !
              </p>
            )}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
      {isSubmitSuccess === true && (
        <SuccessErrorPage
          message={[submissionMessage?.[0], submissionMessage?.[1]]}
          isHeaderFooterRequired={false}
          isSuccess={true}
        />
      )}
      {isSubmitSuccess === false && (
        <SuccessErrorPage
          message={[submissionMessage?.[0], submissionMessage?.[1]]}
          isHeaderFooterRequired={false}
        />
      )}
    </div>
  );
};

export default Body;
