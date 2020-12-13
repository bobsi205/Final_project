import React, { useState, useRef } from 'react';
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
    bio: '',
  });
  const fileInput = useRef();
  const {
    firstName,
    lastName,
    password,
    password2,
    email,
    dateOfBirth,
    institution,
    fieldOfStudy,
    bio,
  } = formData;
  const [interests, setInterests] = useState([
    {
      name: 'Administration',
      objName: 'administration',
      checked: false,
    },
    {
      name: 'Social Work',
      objName: 'socialWork',
      checked: false,
    },
    {
      name: 'Accounting',
      objName: 'accounting',
      checked: false,
    },
    {
      name: 'Humanities',
      objName: 'humanities',
      checked: false,
    },
    {
      name: 'Engineering',
      objName: 'engineering',
      checked: false,
    },
    {
      name: 'Medical Studies',
      objName: 'medicalStudies',
      checked: false,
    },
    {
      name: 'Education',
      objName: 'education',
      checked: false,
    },
    {
      name: 'Architecture',
      objName: 'architecture',
      checked: false,
    },
    {
      name: 'Computer Science',
      objName: 'computerScience',
      checked: false,
    },
    {
      name: 'Psychology',
      objName: 'psychology',
      checked: false,
    },
    {
      name: 'Social Sciences',
      objName: 'socialSciences',
      checked: false,
    },
    {
      name: 'Communication',
      objName: 'communication',
      checked: false,
    },
  ]);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onCheck = (e) => {
    let tempState = [...interests];
    tempState[e.target.dataset.index].checked = !tempState[
      e.target.dataset.index
    ].checked;
    setInterests(tempState);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const interestsToString = () => {
    let educations = '';
    let arr = [
      ...interests.map((cat) => {
        if (cat.checked) return cat.objName;
      }),
    ];

    arr = arr.filter((cat) => cat !== undefined);
    for (let index = 0; index < arr.length; index++) {
      educations = educations.concat(',', arr[index]);
    }
    return educations;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let user = {
      ...formData,
      interests: { education: interestsToString() },
    };
    console.log(user);
    register(user, fileInput.current.files[0]);
  };

  return (
    <Container className="App pt-5">
      <p className="display-4">Join the community</p>
      <hr />
      <Form className="container" onSubmit={(e) => onSubmit(e)}>
        <Form.Group>
          <Form.File
            onChange={() => {
              console.log(fileInput.current.files);
            }}
            id="custom-file-translate-html"
            label="Upload profile image"
            custom
            ref={fileInput}
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
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="bio"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <hr />
        <Form.Label className="text-center">What are your interest?</Form.Label>
        <hr />
        <Form.Group className="d-flex flex-wrap justify-content-between">
          {interests.map((cat, index) => {
            return (
              <Form.Check
                className="m-2"
                type="checkbox"
                data-index={index}
                label={cat.name}
                name={cat.objName}
                checked={cat.checked}
                onChange={(e) => onCheck(e)}
              />
            );
          })}
        </Form.Group>
        <Button
          d-block
          style={{ width: '100%' }}
          type="submit"
          className="mb-4"
        >
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
