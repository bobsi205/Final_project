import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const SearchCard = ({ summary, clickHandler }) => {
  const history = useHistory();
  const routeChange = () => {
    let path = `/summary/${summary._id}`;
    history.push(path);
  };
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
      onClick={() => routeChange()}
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
