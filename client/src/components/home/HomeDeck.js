import React from 'react';
import { HomeCard } from './HomeCard';

export const HomeDeck = (props) => {
  return (
    <div className="row flex-row flex-nowrap">
      {props.cards.map((card, index) => {
        return <HomeCard summary={card} key={index} />;
      })}
    </div>
  );
};
