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
  updateView,
} from '../../actions/summary';
import { updateBookmark } from '../../actions/auth';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { Comments } from './Comments';

export const Summary = ({
  auth,
  summary,
  getSummary,
  match,
  addComment,
  addRating,
  updateBookmark,
  updateView,
}) => {
  useEffect(() => {
    getSummary(match.params.id);
    // updateView(match.params.id);
  }, [getSummary, match.params.id]);

  const [comment, setComment] = useState('');
  const onChange = (e) => {
    setComment(e.target.value);
  };

  const isBookmarked = () => {
    for (let index = 0; index < auth.user.bookmarkedSummaries.length; index++) {
      const sm = auth.user.bookmarkedSummaries[index];
      if (sm._id.toString() === summary.summary._id) return true;
    }
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(summary.summary._id, comment);
  };
  const userRating = () => {
    for (let i = 0; i < summary.summary.rating.length; i++) {
      const rate = summary.summary.rating[i];
      if (rate.user.toString() === auth.user._id.toString()) {
        return rate.rate;
      }
    }

    return 0;
  };
  
  const calculateRating = () => {
    if (summary.summary.rating.length === 0) return 0;
    let rating = 0,
      count = 0;
    summary.summary.rating.forEach((rate) => {
      rating += rate.rate;
      count++;
    });
    return rating / count;
  };

  const rateSummary = (rating) => {
    addRating(summary.summary._id, rating);
  };

  const bookmarkHandler = () => {
    updateBookmark(summary.summary._id);
  };

  return (
    <Container className="my-5">
      {summary.LoadingSummary ? (
        <div className="d-flex justify-content-center">
          <LoadingSpinner />
        </div>
      ) : auth.isAuthenticated && summary.summary !== null ? (
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
                      <span>{summary.summary.rating.length}</span>
                    </Row>
                    <Row className="ml-2">
                      {summary.summary.views.length}
                      <Image className="mx-1 mt-1" src={eye} height="20" />
                    </Row>
                  </Col>
                  <Col xs="auto" className="mx-4 pr-2">
                    <Row>
                      <p>{summary.summary.date.split(/[?T].*/)}</p>
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
                        {summary.summary.firstName} {summary.summary.lastName}
                      </h5>
                    </Row>
                    <Row>
                      <p>
                        <small className="ml-auto">
                          {summary.summary.education[0].degree}
                        </small>
                      </p>
                    </Row>
                  </Col>
                  <Col xs="auto" className="user image">
                    <Image
                      className="rounded-circle"
                      src={summary.summary.picture}
                      height="58"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body
            dangerouslySetInnerHTML={{ __html: summary.summary.text }}
          ></Card.Body>
          <Card.Footer>
            <Form onSubmit={(e) => onSubmit(e)}>
              <Rate
                className="mx-4"
                rate={rateSummary}
                userRating={userRating}
              />
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
            {summary.summary.comments.map((comment) => {
              return <Comments comment={comment} />;
            })}
          </Card.Footer>
        </Card>
      ) : (
        <p>log in to view summary (temp)</p>
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
  updateView: PropTypes.func.isRequired,
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
  updateView,
})(Summary);
