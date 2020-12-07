import React from 'react';
import { Card, Container, Button, Image } from 'react-bootstrap';
import Rating from './Rating';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Summary = ({ auth }) => {
  const newSummary = {
    text: 'text',
    firstName: 'first Name',
    lastName: 'last Name',
    picture: '',
    title: 'title',
    category: 'category',
    user: '',
    rate: 3,
  };
  React.useEffect(() => {
    console.log(auth);
  });
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <Rating rate={newSummary.rate} />
            <Image variant="top" src="*" />
          </Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer>
            <Card.Text>dasdasdadasds</Card.Text>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

Summary.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Summary);
