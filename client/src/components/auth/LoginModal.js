import React from 'react';
import { Form, Button, Modal, Nav } from 'react-bootstrap';

function Login(props) {
  return (
    <Modal {...props} size="md" centered>
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
}

const LoginModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Nav.Link onClick={() => setModalShow(true)}>Sign-In</Nav.Link>
      <Login show={modalShow} onHide={() => setModalShow(false)}  />
    </>
  );
};

export default LoginModal;
