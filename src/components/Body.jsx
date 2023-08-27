import React, { useState } from "react";
import "./styles.css";
import { Rating } from "react-simple-star-rating";

const Body = () => {
  const [characterCounter, setCharacterCounter] = useState(0);
  const [comments, setComments] = useState("");
  const [ratings, setRatings] = useState({
    rating1: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,
  });

  return (
    <div className="body-container">
      <div className="body-header-text-container">
        <p className="text-large">HELP US IMPROVE</p>
        <p className="text-small">Thank you for your feedback</p>
      </div>
      <div className="body-question-text-container">
        <div className="question-segment">
          <p className="text-medium">
            How satisfied were you with the quality of the product you purchased
            ?
          </p>
          <div className="rating-stars">
            <Rating
              onClick={(value) => setRatings({ ...ratings, rating1: value })}
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
            Was the price of the product reasonable ?
          </p>
          <div className="rating-stars">
            <Rating
              onClick={(value) => setRatings({ ...ratings, rating2: value })}
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
            How likely are you to recommend our products & services to others ?
          </p>
          <div className="rating-stars">
            <Rating
              onClick={(value) => setRatings({ ...ratings, rating3: value })}
              size="2rem"
              fillColor="#687047"
              emptyColor="#d9dec5"
              SVGstorkeWidth="0.5"
              SVGstrokeColor="#687047"
            />
          </div>
        </div>
        <div className="question-segment">
          <p className="text-medium">How would you rate our tailoring unit ?</p>
          <div className="rating-stars">
            <Rating
              onClick={(value) => setRatings({ ...ratings, rating4: value })}
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
            How would you rate your overall experience with our company ?
          </p>
          <div className="rating-stars">
            <Rating
              onClick={(value) => setRatings({ ...ratings, rating5: value })}
              size="2rem"
              fillColor="#687047"
              emptyColor="#d9dec5"
              SVGstorkeWidth="0.5"
              SVGstrokeColor="#687047"
            />
          </div>
        </div>
        <div className="question-segment">
          <p className="text-medium">Any other comments ?</p>
          <div className="comments-text-area">
            <textarea
              maxLength={100}
              rows={3}
              onChange={(event) => {
                setCharacterCounter(event.target.value.length);
                setComments(event.target.value);
                console.log(comments);
              }}
            />
            <p>{characterCounter} / 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
