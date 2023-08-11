import { useState } from "react";
import { Score } from "../../styles";

export type StarRating = {
  rating: number;
  setRating: (index: number) => void;
};

const StarRating: React.FC<StarRating> = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  const stars = [...Array(5)];

  const handleRating = (index: number) => {
    setRating(index);
  };
  return (
    <div>
      <h2>StarsCalifaction</h2>
      <p>{rating} stars</p>
      {stars.map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="starRating"
              value={ratingValue}
              style={{ appearance: "none" }}
              onClick={() => handleRating(ratingValue)}
            />
            <Score
              checkStar={ratingValue <= (hover || rating)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
