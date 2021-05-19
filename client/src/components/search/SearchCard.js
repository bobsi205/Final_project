import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import StarEmpty from './images/star_empty.svg';
import categoriesData from '../../utils/categoriesData.json';

export const SearchCard = ({ summary }) => {
  const history = useHistory();
  const routeChange = () => {
    let path = `/summary/${summary._id}`;
    history.push(path);
  };
  const calculateRating = () => {
    if (summary.rating !== undefined) {
      if (summary.rating.length === 0) return 0;
      let rating = 0,
        count = 0;
      summary.rating.forEach((rate) => {
        rating += rate.rate;
        count++;
      });
      return rating / count;
    }
  };

  const findCatName = (catId) => {
    console.log(catId, categoriesData);
    let foundCat = categoriesData.find((cat) => catId === cat.id);
    return foundCat.name;
  };

  return (
    <Card
      key={summary._id}
      className="col-3 m-2 "
      style={{
        minWidth: '18rem',
        minHeight: '250px',
        maxHeight: '250px',
        overflow: 'hidden',
      }}
      onClick={() => routeChange()}
    >
      <Card.Body>
        <Card.Title className="unSelectable" style={{ fontSize: '12px' }}>
          {summary.title}
        </Card.Title>
        <Card.Text
          className="text-muted unSelectable overflow-hidden"
          style={{ fontSize: '8px', height: '150px' }}
          dangerouslySetInnerHTML={{ __html: summary.text }}
        ></Card.Text>
        <Card.Text className="text-muted text-right">
          <div className="d-flex">
            <div className="mr-auto">
              {/* category */}
              <p>{findCatName(summary.category)}</p>
            </div>
            <div className="">
              {/* views */}
              <Image src="/eye.svg" height="20" className="mb-1" />{' '}
              {summary.views.length}
              <span> </span>
              {/* rating */}
              <Image src={StarEmpty} height="20" className="mb-1" />{' '}
              {calculateRating()}
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
