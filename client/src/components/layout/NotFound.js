import React from 'react';
import { Container, Image } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-4">We are sorry,</h1>
      <p className="text-muted">
        but this page you were looking for can not be found
      </p>
      <Image className="w-75" src="/404-page.png" alt="404page" />
    </Container>
  );
};

export default NotFound;
