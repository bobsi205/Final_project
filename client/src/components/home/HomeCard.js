import React from 'react';
import { Card } from 'react-bootstrap';

export const HomeCard = (props) => {
  return (
    <Card
      className="mx-2 my-2"
      style={{
        minWidth: '18rem',
        minHeight: '200px',
      }}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-muted">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
