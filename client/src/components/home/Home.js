import React, { useState } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HomeDeck } from './HomeDeck';
import { CategoryBox } from './CategoryBox';
import catagoriesDB from './catagoriesDB.json';

export const Home = () => {
  const [data] = useState([
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
    <>
      <Image src="banner.jpg" className="img-fluid mb-3" />
      <Container>
        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">Recent</h2>
          <Container style={{ overflow: 'hidden' }}>
            <HomeDeck cards={data} />
          </Container>
        </Row>
        <hr />
        <Row>
          {catagoriesDB.map((cat) => {
            return (
              <Col xs={6} md={3} className="p-0">
                <CategoryBox cat={cat.name} image={cat.img} />
              </Col>
            );
          })}
        </Row>
        <hr />

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">Recommended</h2>
          <Container style={{ overflow: 'hidden' }}>
            <HomeDeck cards={data} />
          </Container>
        </Row>
        <hr />

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">Popular</h2>
          <Container style={{ overflow: 'hidden' }}>
            <HomeDeck cards={data} />
          </Container>
        </Row>
        <hr />

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">New</h2>
          <Container style={{ overflow: 'hidden' }}>
            <HomeDeck cards={data} />
          </Container>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
