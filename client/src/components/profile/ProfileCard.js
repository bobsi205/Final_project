import React from 'react';
import { Card } from 'react-bootstrap';

export const ProfileCard = (props) => {
  return (
    <Card
      className="mx-3 my-2"
      style={{
        width: '18rem',
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
