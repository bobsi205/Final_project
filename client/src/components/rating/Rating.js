import React from 'react';
import StarFull from './images/star_full.svg';
import StarEmpty from './images/star_empty.svg';
import HalfStar from './images/star-half-empty.svg';

import { Image } from 'react-bootstrap';

export default function Rating(props) {
  const star = [];
  let b = true;
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(props.rate)) star.push(StarFull);
  }
  for (let i = star.length; i < 5; i++) {
    if (props.rate - Math.floor(props.rate) && b) {
      star.push(HalfStar);
      b = false;
    } else {
      star.push(StarEmpty);
    }
  }

  return (
    <div className="d-flex m-2">
      {star.map((s, index) => (
        <Image key={index} src={s} height="20" />
      ))}
    </div>
  );
}
