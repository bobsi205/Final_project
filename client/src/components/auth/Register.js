import React from 'react';
import { Col, Row, Button, Alert, Form } from 'react-bootstrap';

function Register() {
  var profileImg = <img src="icons/upload" />;
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />

      <Form className="container">
        {/* <Form.Group className="text-center">
          <Alert variant="info">Sign Up </Alert>
        </Form.Group> */}
        <Form.Group>
          <Form.File
            id="custom-file-translate-html"
            label="Upload profile image"
            custom
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control required type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control required type="text" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              required
              type="confirmPassword"
              placeholder="Confirm Password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control required type="date"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control required type="text" placeholder="Education" />
        </Form.Group>

        <hr />
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
    </div>
  );
}

export default Register;
