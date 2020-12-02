import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../style/style.css';

export const CategoryBox = (props) => {
  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <Image
        className="zoom zoom:hover img-responsive center-block"
        size="lg"
        style={{
          height: '180px',
          width: '100%',
        }}
        src={props.image}
      />
    </div>
  );
};
