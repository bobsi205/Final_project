import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

export const ProfileInfo = () => {
  return (
    <>
      <Link className="ml-3" to="/profile/edit">
        <Image
          src="icons/edit-g.svg"
          style={{
            width: '20px',
            height: '20px',
            position: 'absolute',
          }}
        />
      </Link>
      <Row>
        <Col className="text-center">
          <Image
            src="/lilach-katzabi.jpg"
            style={{ height: '125px', width: '125px' }}
            roundedCircle
            className="mb-1"
          />
          <h2>Lilak Katzabi</h2>
          <p className="lead mb-0">Computer Science</p>
          <p className="text-muted">Bar Ilan University</p>
        </Col>
      </Row>

      <hr></hr>

      <Row className="my-3">
        <Col className="text-center text-secondary">
          <p className="text-muted mb-0">Uploads</p>
          <p className="lead ">7 Summaries</p>
        </Col>

        <Col className="text-center text-secondary">
          <Row className="d-flex justify-content-center">
            <Image
              className="mr-2"
              width="18px"
              height="18px"
              src="icons/star-b.svg"
            />
            <p>4.3</p>
          </Row>
          <Row className="d-flex justify-content-center">
            <Image
              className="mr-2"
              width="18px"
              height="18px"
              src="icons/eye.svg"
            />
            <p>102</p>
          </Row>
        </Col>

        <Col sm className="text-center text-secondary">
          <p className="text-muted mb-0">Bio</p>
          <p className="lead ">
            I’m a computer science student at bar ilan university
          </p>
        </Col>
      </Row>
    </>
  );
};
