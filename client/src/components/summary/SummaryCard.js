import React from 'react';
import { Card } from 'react-bootstrap';

export const SummaryCard = (props) => {
  return (
    <Card className="mb-2 mt-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-muted">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
