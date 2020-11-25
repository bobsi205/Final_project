import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Form, Button } from 'react-bootstrap';

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
    return <Redirect to="/dashboard" />;
  }

  return (
    <Form className="container text-center">
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" size="lg" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" size="lg" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Log In
      </Button>
      <br />
      <Form.Label>Forgot Password?</Form.Label>
      <hr />
      <Button variant="outline-primary" type="submit" block>
        Sign Up
      </Button>
    </Form>
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
