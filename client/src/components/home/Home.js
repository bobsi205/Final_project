import React, { useState } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HomeDeck } from './HomeDeck';
import { CategoryBox } from './CategoryBox';
import catagoriesDB from './catagoriesDB.json';

export const Home = () => {
  const [data] = useState([
    {
      title: 'Computer Science1',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science2',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science3',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science4',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science5',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science6',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science7',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science8',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
  ]);

  const [scroll, setScroll] = useState({
    isDown: false,
    startX: null,
    scrollLeft: null,
  });

  const mouseDown = (e, id) => {
    setScroll({
      isDown: true,
      startX: e.pageX - e.target.offsetLeft,
      scrollLeft: document.getElementById(id).scrollLeft,
    });
  };

  const mouseMove = (e, id) => {
    const slider = document.getElementById(id);
    // console.log(slider.scrollLeft);
    if (!scroll.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - scroll.startX;
    if (slider.scrollWidth > slider.scrollLeft && slider.scrollLeft >= 0)
      slider.scrollLeft = scroll.scrollLeft - walk;
  };

  const mouseUp = (e) => {
    setScroll({ ...scroll, isDown: false });
  };

  return (
    <>
      <Image src="banner.jpg" className="img-fluid mb-3" />
      <Container>
        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">Recent</h2>
          <Container
            fluid
            style={{ overflow: 'hidden' }}
            id="Recent"
            onMouseDown={(e) => mouseDown(e, 'Recent')}
            onMouseMove={(e) => mouseMove(e, 'Recent')}
            onMouseUp={(e) => mouseUp(e)}
          >
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
          <Container
            fluid
            style={{ overflow: 'hidden' }}
            id="Recommended"
            onMouseDown={(e) => mouseDown(e, 'Recommended')}
            onMouseMove={(e) => mouseMove(e, 'Recommended')}
            onMouseUp={(e) => mouseUp(e)}
          >
            <HomeDeck cards={data} />
          </Container>
        </Row>
        <hr />

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">Popular</h2>
          <Container
            fluid
            style={{ overflow: 'hidden' }}
            id="Popular"
            onMouseDown={(e) => mouseDown(e, 'Popular')}
            onMouseMove={(e) => mouseMove(e, 'Popular')}
            onMouseUp={(e) => mouseUp(e)}
          >
            <HomeDeck cards={data} />
          </Container>
        </Row>
        <hr />

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">New</h2>
          <Container
            fluid
            style={{ overflow: 'hidden' }}
            id="New"
            onMouseDown={(e) => mouseDown(e, 'New')}
            onMouseMove={(e) => mouseMove(e, 'New')}
            onMouseUp={(e) => mouseUp(e)}
          >
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
