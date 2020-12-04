import React, { useState } from 'react';
import { Form, Button, Modal, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const LoginModal = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  const Login = () => {
    return (
      <Modal size="md" centered>
        <Modal.Body>
          <Form className="container text-center">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                size="lg"
                placeholder="Enter email"
                // value={email}
                // onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                size="lg"
                placeholder="Password"
                // value={password}
                // onChange={(e) => onChange(e)}
              />
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
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <Nav.Link onClick={() => setModalShow(true)}>Sign-In</Nav.Link>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

LoginModal.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginModal);
