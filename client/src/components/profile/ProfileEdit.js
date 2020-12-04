import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import {
  Image,
  Col,
  Row,
  Button,
  Alert,
  Form,
  Container,
} from 'react-bootstrap';
import { connect } from 'react-redux';

const ProfileEdit = ({ setAlert }) => {
  const [profile, setProfile] = useState({
    bio: 'current bio',
    institution: 'bar ilan',
    fieldOfStudy: 'computer science',
    profileImg: 'img',
    interests: 'interests',
  });
  const { bio, institution, fieldOfStudy, profileImg, interests } = profile;

  const onChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    //add logic
  };
  return (
    <Container className="bg-light my-4 py-4 ">
      <Form onSubmit={(e) => onSubmit(e)}>
        <Row>
          <Col className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/lilach-katzabi.jpg"
                style={{ height: '125px', width: '125px' }}
                roundedCircle
                className="mb-1"
              />
              <Image
                src="/icons/upload-g.svg"
                style={{
                  width: '60px',
                  height: '60px',
                  position: 'absolute',
                }}
              />
            </div>
            <h2>Lilak Katzabi</h2>
          </Col>
        </Row>
        <hr />
        <Container className="my-4">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="institution"
                name="institution"
                value={institution}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="field Of Study"
                name="fieldOfStudy"
                value={fieldOfStudy}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <textarea
              type="text"
              placeholder="bio"
              className="form-control"
              style={{ width: '100%' }}
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Container>
        <hr />

        <Form.Label className="text-center">What are your interest?</Form.Label>
        <Form.Group className="d-flex flex-wrap justify-content-around">
          <Form.Check className="m-2" type="checkbox" label="Administration" />
          <Form.Check className="m-2" type="checkbox" label="Social work" />
          <Form.Check className="m-2" type="checkbox" label="Accounting" />
          <Form.Check className="m-2" type="checkbox" label="Humanities" />
          <Form.Check className="m-2" type="checkbox" label="Engineering " />
          <Form.Check className="m-2" type="checkbox" label="Medical Studies" />
          <Form.Check className="m-2" type="checkbox" label="Education" />
          <Form.Check className="m-2" type="checkbox" label="Architecture" />
          <Form.Check
            className="m-2"
            type="checkbox"
            label="Computer Science"
          />
          <Form.Check className="m-2" type="checkbox" label="psychology" />
          <Form.Check className="m-2" type="checkbox" label="Social Sciences" />
          <Form.Check className="m-2" type="checkbox" label="communication" />
          <Form.Check className="m-2" type="checkbox" label="sociology" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" className="mr-2">
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </div>
      </Form>
    </Container>
  );
};

ProfileEdit.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
