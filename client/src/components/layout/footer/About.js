import React from "react";
import img from "./images/aboutImg.jpg"
import { Container, Row, Col,Image } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Container className="pt-5">
          <p className="display-3 text-center">About Us</p><hr/>
        <Row>
          <Col sm="12" xl="6"><Image className="w-100" src={img} alt="404page" /></Col>
          <Col>
            <h5>Who we are?</h5>
            <h2 className="display-4">
              Helping developers and technologists write the script of the
              future.
            </h2>
            <p className="lead">
              Our public platform serves 100 million people every month, making
              it one of the 50 most popular websites in the world.
            </p>

            <p className="lead">
              Our asynchronous knowledge management and collaboration offering
              Stack Overflow for Teams, is transforming how people work.
            </p>
          </Col>
        </Row>
        <hr/>
      </Container>
    </div>
  );
}
