import React from 'react';
import { Button } from 'react-bootstrap';
export const CategoryBox = (props) => {
  return (
    <Button
      size="lg"
      style={{
        height: '180px',
        width: '100%',
        display: 'block',
        borderRadius: '0',
        border: 'solid white 1px',
        backgroundImage: 'url(cat/accounting.jpg)',
        backgroundSize: 'cover',
      }}
    >
      {props.cat}
    </Button>
  );
};
