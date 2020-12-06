import React, { useState } from 'react';
import { Col, Row, Button, Alert, Form, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    password2: '',
    email: '',
    dateOfBirth: null,
    institution: '',
    fieldOfStudy: '',
    profileImg: '',
    interests: '',
  });

  const {
    firstName,
    lastName,
    password,
    password2,
    email,
    dateOfBirth,
    institution,
    fieldOfStudy,
    profileImg,
    interests,
  } = formData;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <Container className="App pt-5">
      <p className="display-4">Join the community</p><hr/>
      <Form className="container" onSubmit={(e) => onSubmit(e)}>
        <Form.Group>
          <Form.File
            id="custom-file-translate-html"
            label="Upload profile image"
            custom
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              required
              type="Password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="institution"
            name="institution"
            value={institution}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="field Of Study"
            name="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <hr />
        {/* need to add logic for interest */}
        <Form.Label className="text-center">What are your interest?</Form.Label>
        <hr />
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
        <Button d-block style={{ width: '100%' }} className="mb-4">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

Register.protoType = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
