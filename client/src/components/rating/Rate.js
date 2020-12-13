import React from 'react';
import { Image } from 'react-bootstrap';
import StarFull from './images/star_full.svg';
import StarEmpty from './images/star_empty.svg';

import ReactStars from 'react-rating-stars-component';
export default function Rate({ rate }) {
  return (
    <ReactStars
      count={5}
      onChange={rate}
      size={24}
      emptyIcon={<Image src={StarEmpty} height="20" />}
      fullIcon={<Image src={StarFull} height="20" />}
      activeColor="#ffd700"
    />
  );
}
