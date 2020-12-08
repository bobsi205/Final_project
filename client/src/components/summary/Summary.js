import React from 'react';
import {
  Card,
  Container,
  Button,
  Image,
  Row,
  Col,
  Media,
  InputGroup,
  Form,
} from 'react-bootstrap';
import Rating from './Rating';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SummaryText from './text.json';
import eye from './images/eye.svg';
import dropArrow from './images/down-arrow.svg';

export const Summary = ({ auth }) => {
  React.useEffect(() => {
    console.log(SummaryText);
  });
  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header className="">
            <Row className="d-flex align-items-center">
              <Col xs="auto" className="view rate download pt-0">
                <Row>
                  <Col xs="auto">
                    <Row>
                      <Rating className="mx-4" rate="3" />
                    </Row>
                    <Row className="ml-2">
                      <span>42 Rating</span>
                    </Row>
                    <Row className="ml-2">
                      105
                      <Image className="mx-1 mt-1" src={eye} height="20" />
                    </Row>
                  </Col>
                  <Col xs="auto" className="mx-4 pr-2">
                    <Row>
                      <p>Nov 8,2019</p>
                    </Row>
                  </Col>
                  <Col xs="auto">
                    <Image src={dropArrow} height="28" />
                  </Col>
                </Row>
              </Col>
              <Col></Col>

              <Col xs="auto">
                <Row>
                  <Col xs="auto">
                    <Row>
                      <h5 className="ml-auto">{SummaryText.user}</h5>
                    </Row>
                    <Row>
                      <p>
                        <small className="ml-auto">{SummaryText.degree}</small>
                      </p>
                    </Row>
                  </Col>
                  <Col xs="auto" className="user image">
                    <Image
                      className="rounded-circle"
                      src="lilach-katzabi.jpg"
                      height="58"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Title>{SummaryText.title}</Card.Title>
            <Card.Text>{SummaryText.text}</Card.Text>
            <Card.Title>{SummaryText.title}</Card.Title>
            <Card.Text>{SummaryText.text}</Card.Text>
            <Card.Text>{SummaryText.text}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Form>
              <Form.Group>
                <Form.Control
                  placeholder="What's are your thot?"
                  as="textarea"
                  rows={1}
                />
              </Form.Group>
            </Form>

            <Media>
              <Image
                className="rounded-circle m-2"
                src="lilach-katzabi.jpg"
                height="58"
              />
              <Media.Body
                className="py-2 px-4"
                style={{ backgroundColor: '#F1F1F1', borderRadius: '1rem' }}
              >
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
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
