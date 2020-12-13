import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Form, Button,Container } from 'react-bootstrap';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container className="pt-5 m-4">
      <Form className=" bg-light text-center" onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            size="lg"
            placeholder="Enter email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            size="lg"
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Log In
        </Button>
        <br />
        <h4>New member?</h4>
        <hr />
        <Button variant="outline-primary" type="submit" block>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
