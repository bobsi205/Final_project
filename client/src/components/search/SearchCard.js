import React from 'react';
import { Card } from 'react-bootstrap';

export const SearchCard = ({ summary }) => {
  return (
    <Card
      key={summary._id}
      className="col-3 m-2 "
      style={{
        minWidth: '18rem',
        minHeight: '200px',
        maxHeight: '200px',
        overflow: 'hidden',
      }}
    >
      <Card.Body>
        <Card.Title className="unSelectable">{summary.title}</Card.Title>
        <Card.Text
          className="text-muted unSelectable"
          style={{ fontSize: '12px' }}
          dangerouslySetInnerHTML={{ __html: summary.text }}
        ></Card.Text>
      </Card.Body>
    </Card>
  );
};
