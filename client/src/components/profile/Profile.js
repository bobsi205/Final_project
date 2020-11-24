import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { ProfileDeck } from '../summary/SummaryDeck';
import { ProfileInfo } from './ProfileInfo';

export const Profile = () => {
  const [data, setData] = useState([
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
  ]);
  return (
    <Container className="bg-light my-4 py-4">
      <ProfileInfo />

      <Tabs
        fill
        className="d-flex justify-content-around mb-4"
        defaultActiveKey="Recent"
      >
        <Tab eventKey="Recent" title="Recent" block>
          <ProfileDeck cards={data} />
        </Tab>
        <Tab className="" eventKey="Bookmarked" title="Bookmarked">
          <ProfileDeck cards={data} />
        </Tab>
        <Tab className="" eventKey="Uploaded" title="Uploaded">
          <ProfileDeck cards={data} />
        </Tab>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
