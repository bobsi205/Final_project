import React from 'react';
import { Container } from 'react-bootstrap';
import { HomeCard } from './HomeCard';

export const HomeDeck = (props) => {
  return (
    <div className="d-flex justify-content-between ">
      {props.cards.map((card) => {
        return <HomeCard title={card.title} text={card.text} />;
      })}
    </div>
  );
};
