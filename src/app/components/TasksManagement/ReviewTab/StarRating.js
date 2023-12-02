/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { BsStarFill} from "react-icons/bs";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i} className="labelStar">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <BsStarFill
              key={i}
              className="star"
              size={100}
              color={ratingValue <= (hover || rating) ? "rgb(254, 191, 58)" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {/* <p>Rating is: {rating}</p> */}
    </div>
  );
};

export default StarRating;
