import React from "react";
import StarFull from "./images/star_full.svg";
import StarEmpty from "./images/star_empty.svg";
import { Image } from "react-bootstrap";

export default function Rating(props) {
  const star = [];

  for (let i = 0; i < 5; i++) {
    i < props.rate ? star.push(StarFull) : star.push(StarEmpty);
  }
  return (
    <div className="d-flex">
      {star.map((s) => (
        <Image src={s} height="28" width="28" />
      ))}
    </div>
  );
}
