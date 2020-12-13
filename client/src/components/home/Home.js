import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HomeDeck } from './HomeDeck';
import { CategoryBox } from './CategoryBox';
import { getUserSummaries } from '../../actions/summary';
import categoriesData from '../../utils/categoriesData.json';
import PropTypes from 'prop-types';

export const Home = ({ auth, getUserSummaries, summary }) => {
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

  useEffect(() => {
    if (auth.isAuthenticated) getUserSummaries();
  }, [getUserSummaries, auth.isAuthenticated]);

  const [scroll, setScroll] = useState({
    isDown: false,
    mousePosition: null,
  });

  const mouseDown = (e, id) => {
    setScroll({
      isDown: true,
      mousePosition: e.screenX,
    });
  };

  const mouseMove = (e, id) => {
    const slider = document.getElementById(id);
    const oldPos = scroll.mousePosition;
    if (!scroll.isDown) return;
    e.preventDefault();
    setScroll(
      { ...scroll, mousePosition: e.screenX },
      (slider.scrollLeft -= e.screenX - oldPos)
    );
  };

  const mouseUp = (e) => {
    console.log('mouse up');
    setScroll({ ...scroll, isDown: false });
  };

  return (
    <>
      <>
        <header
          className="d-flex flex-row"
          style={{
            backgroundImage: `url(banner.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            margin: 0,
            padding: 0,
            minHeight: '300px',
          }}
        ></header>
        <div className="bg-light p-2 mb-4"></div>
      </>

      <Container onMouseUp={(e) => mouseUp(e)}>
        {auth.isAuthenticated && !summary.loadingSummaries ? (
          <>
            {console.log(summary)}
            <Row className="my-3">
              <h2 className="ml-4 mt-2 text-primary">Recent</h2>
              <Container
                className="scrollbarClean"
                fluid
                style={{ overflow: 'auto' }}
                id="Recent"
                onMouseDown={(e) => mouseDown(e, 'Recent')}
                onMouseMove={(e) => mouseMove(e, 'Recent')}
              >
                <HomeDeck cards={summary.summaries.recent} />
              </Container>
            </Row>
            <hr />
            <Row>
              {categoriesData.map((cat) => {
                return (
                  <Col key={cat.id} xs={6} md={3} className="p-0 m-auto">
                    <CategoryBox cat={cat} />
                  </Col>
                );
              })}
            </Row>
            <hr />

            <Row className="my-3">
              <h2 className="ml-4 mt-2 text-primary">Recommended</h2>
              <Container
                className="scrollbarClean"
                fluid
                style={{ overflow: 'auto' }}
                id="Recommended"
                onMouseDown={(e) => mouseDown(e, 'Recommended')}
                onMouseMove={(e) => mouseMove(e, 'Recommended')}
              >
                <HomeDeck cards={data} />
              </Container>
            </Row>
            <hr />
          </>
        ) : (
          <>
            <Row>
              {categoriesData.map((cat) => {
                return (
                  <Col key={cat.id} xs={6} md={3} className="p-0 m-auto">
                    <CategoryBox cat={cat} />
                  </Col>
                );
              })}
            </Row>
            <hr />
          </>
        )}

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">Popular</h2>
          <Container
            className="scrollbarClean"
            fluid
            style={{ overflow: 'auto' }}
            id="Popular"
            onMouseDown={(e) => mouseDown(e, 'Popular')}
            onMouseMove={(e) => mouseMove(e, 'Popular')}
          >
            <HomeDeck cards={data} />
          </Container>
        </Row>
        <hr />

        <Row className="my-3">
          <h2 className="ml-4 mt-2 text-primary">New</h2>
          <Container
            className="scrollbarClean"
            fluid
            style={{ overflow: 'auto' }}
            id="New"
            onMouseDown={(e) => mouseDown(e, 'New')}
            onMouseMove={(e) => mouseMove(e, 'New')}
          >
            <HomeDeck cards={data} />
          </Container>
        </Row>
      </Container>
    </>
  );
};

Home.protoType = {
  auth: PropTypes.object.isRequired,
  getUserSummaries: PropTypes.func.isRequired,
  summary: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  summary: state.summary,
});

export default connect(mapStateToProps, { getUserSummaries })(Home);
