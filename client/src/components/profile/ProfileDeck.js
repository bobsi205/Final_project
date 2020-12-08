import React from 'react';
import { Container } from 'react-bootstrap';
import { ProfileCard } from './ProfileCard';

export const ProfileDeck = (props) => {
  return (
    <Container className="d-flex flex-wrap justify-content-around">
      {props.cards.map((card) => {
        return <ProfileCard title={card.title} text={card.text} />;
      })}
    </Container>
  );
};
