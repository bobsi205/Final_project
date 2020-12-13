import React from 'react';
import { Container } from 'react-bootstrap';
import { ProfileCard } from './ProfileCard';

export const ProfileDeck = ({ cards }) => {
  return (
    <Container className="d-flex flex-wrap justify-content-around">
      {cards.map((card) => {
        return <ProfileCard key={card.key} summary={card} />;
      })}
    </Container>
  );
};
