import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { SummaryCard } from './SummaryCard';

export const ProfileDeck = (props) => {
  return (
    <Container className="d-flex flex-wrap justify-content-between">
      {props.cards.map((card) => {
        return <SummaryCard title={card.title} text={card.text} />;
      })}
    </Container>
  );
};
