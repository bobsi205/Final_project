import React from 'react';
import { HomeCard } from './HomeCard';

export const HomeDeck = (props) => {
  return (
    <div className="row flex-row flex-nowrap">
      {props.cards.map((card, index) => {
        return <HomeCard title={card.title} text={card.text} index={index} />;
      })}
    </div>
  );
};
