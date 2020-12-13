import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Button,
  Image,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import Rating from '../rating/Rating';
import Rate from '../rating/Rate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import eye from './images/eye.svg';
import {
  getSummary,
  addComment,
  addRating,
  updateBookmark,
} from '../../actions/summary';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { Comments } from './Comments';

export const Summary = ({
  auth,
  summary: { summary, loading },
  getSummary,
  match,
  addComment,
  addRating,
  updateBookmark,
}) => {
  useEffect(() => {
    getSummary(match.params.id);
  }, [getSummary]);

  const [comment, setComment] = useState('');
  const onChange = (e) => {
    setComment(e.target.value);
  };

  const isBookmarked = () => {
    for (let index = 0; index < auth.user.bookmarkedSummaries.length; index++) {
      const sm = auth.user.bookmarkedSummaries[index];
      if (sm._id.toString() === summary._id) return true;
    }
    console.log('here');
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(summary._id, comment);
  };

  const calculateRating = () => {
    if (summary.rating.length === 0) return 0;
    let rating = 0,
      count = 0;
    summary.rating.forEach((rate) => {
      rating += rate.rate;
      count++;
    });
    return rating / count;
  };

  const rateSummary = (rating) => {
    addRating(summary._id, rating);
  };

  const bookmarkHandler = () => {
    updateBookmark(summary._id);
  };

  return (
    <Container className="my-5">
      {loading ? (
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
                      <Rating rate={calculateRating()} />
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
                    <Image
                      src={`/icons/bookmark-${isBookmarked() ? 'b' : 'w'}.svg`}
                      height="28"
                      onClick={(e) => bookmarkHandler(e)}
                    />
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
                      src={summary.picture}
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
            <Form onSubmit={(e) => onSubmit(e)}>
              <Rate className="mx-4" rate={rateSummary} />
              <Row>
                <Col className="p-0 h-100">
                  <Form.Group>
                    <Form.Control
                      placeholder="What's are your mind?"
                      as="textarea"
                      rows={1}
                      value={comment}
                      onChange={(e) => onChange(e)}
                    />
                  </Form.Group>
                </Col>

                <Button type="submit">Post</Button>
              </Row>
            </Form>
            {summary.comments.map((comment) => {
              return <Comments comment={comment} />;
            })}
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
  addComment: PropTypes.func.isRequired,
  addRating: PropTypes.func.isRequired,
  updateBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  summary: state.summary,
});

export default connect(mapStateToProps, {
  getSummary,
  addComment,
  addRating,
  updateBookmark,
})(Summary);
