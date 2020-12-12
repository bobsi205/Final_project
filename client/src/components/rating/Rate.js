import React from 'react';
import { Image } from 'react-bootstrap';
import StarFull from './images/star_full.svg';
import StarEmpty from './images/star_empty.svg';
import starHalfEmpty from './images/star-half-empty.svg';

import ReactStars from 'react-rating-stars-component';
export default function Rate() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={false}
      emptyIcon={<Image src={StarEmpty} height="20" />}
      // halfIcon={<Image src={starHalfEmpty} height="20" />}
      fullIcon={<Image src={StarFull} height="20" />}
      activeColor="#ffd700"
    />
  );
}
