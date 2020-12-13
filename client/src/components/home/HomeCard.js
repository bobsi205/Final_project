import React from 'react';
import { Card } from 'react-bootstrap';

export const HomeCard = (props) => {
  return (
    <Card
      className="col-3 m-2 "
      style={{
        minWidth: '18rem',
        minHeight: '200px',
      }}
    >
      <Card.Body>
        <Card.Title className="unSelectable">{props.title}</Card.Title>
        <Card.Text className="text-muted unSelectable">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
