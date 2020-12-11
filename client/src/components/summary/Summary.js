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
import { getSummary } from '../../actions/summary';
import { LoadingSpinner } from '../layout/LoadingSpinner';

export const Summary = ({
  auth,
  summary: { summary, loading },
  getSummary,
  match,
}) => {
  React.useEffect(() => {
    getSummary(match.params.id);
    console.log();
  }, []);

  const calculateRating = () => {
    if (summary.rating.length === 0) return 0;
    let rating,
      count = 0;
    summary.rating.forEach((rate) => {
      rating += rate.rate;
      count++;
    });
    return rating / count;
  };

  return (
    <Container className="my-5">
      {loading === true ? (
        <div className="d-flex justify-content-center">
          <LoadingSpinner />
        </div>
      ) : (
        <Card>
          <Card.Header className="">
            <Row className="d-flex align-items-center">
              <Col xs="auto" className="view rate download pt-0">
                <Row>
                  <Col xs="auto">
                    <Row>
                      <Rating className="mx-4" rate={calculateRating()} />
                    </Row>
                    <Row className="ml-2">
                      <span>{summary.rating.length}</span>
                    </Row>
                    <Row className="ml-2">
                      {summary.views.length}
                      <Image className="mx-1 mt-1" src={eye} height="20" />
                    </Row>
                  </Col>
                  <Col xs="auto" className="mx-4 pr-2">
                    <Row>
                      <p>{summary.date.split(/[?T].*/)}</p>
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
                      <h5 className="ml-auto">
                        {summary.firstName} {summary.lastName}
                      </h5>
                    </Row>
                    <Row>
                      <p>
                        <small className="ml-auto">
                          {summary.education[0].degree}
                        </small>
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
          <Card.Body
            dangerouslySetInnerHTML={{ __html: summary.text }}
          ></Card.Body>
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
      )}
    </Container>
  );
};

Summary.propTypes = {
  auth: PropTypes.object.isRequired,
  summary: PropTypes.object.isRequired,
  getSummary: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  summary: state.summary,
});

export default connect(mapStateToProps, { getSummary })(Summary);
