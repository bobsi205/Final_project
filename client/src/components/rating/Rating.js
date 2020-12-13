import React from 'react';
import StarFull from './images/star_full.svg';
import StarEmpty from './images/star_empty.svg';
import { Image } from 'react-bootstrap';

export default function Rating(props) {
  const star = [];

  for (let i = 0; i < 5; i++) {
    i < props.rate ? star.push(StarFull) : star.push(StarEmpty);
  }
  return (
    <div className="d-flex m-2">
      {star.map((s, index) => (
        <Image key={index} src={s} height="20" />
      ))}
    </div>
  );
}
