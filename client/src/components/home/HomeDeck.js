import React from 'react';
import { Container } from 'react-bootstrap';
import { HomeCard } from './HomeCard';

export const HomeDeck = (props) => {
  return (
    <div className="row flex-row flex-nowrap">
      {props.cards.map((card) => {
        return <HomeCard title={card.title} text={card.text} />;
      })}
    </div>
  );
};
