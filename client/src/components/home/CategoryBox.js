import React from 'react';
import { Button } from 'react-bootstrap';
import '../../style/style.css';

export const CategoryBox = (props) => {
  return (
    <Button
      className="zoom zoom:hover"
      size="lg"
      style={{
        height: '180px',
        width: '100%',
        display: 'block',
        color: 'white',
        fontSize: '2rem',
        textShadow: '1px 2px black',
        borderRadius: '0',
        border: 'solid white 1px',
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
      }}
    >
      {props.cat}
    </Button>
  );
};
