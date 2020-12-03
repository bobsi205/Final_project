import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../../auth/LoginModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import categoriesDB from '../../../utils/categoriesDB.json';
import { CategoryBox } from './CategoryBox';

const Navigation = ({ isAuthenticated }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-between"
        id="basic-navbar-nav"
      >
        {/* left side */}

        <Nav>
          <Navbar.Brand>
            <Image src="logo.svg" width="160" height="40" className="m-0" />
          </Navbar.Brand>
          <Nav.Link href="#home" eventKey="homePage">
            <Image
              src="icons/plus-sign.svg"
              width="28"
              height="28"
              alt="wallet img"
              className="m-1"
            />
          </Nav.Link>
        </Nav>

        {/* // center side */}

        <Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Nav>

        {/* //right side */}
        {isAuthenticated ? (
          <Nav className="d-flex align-items-center">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categoriesDB.map((cat) => (
                <NavDropdown.Item href="#action/1">{cat.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Row>
                {categoriesDB.map((cat) => {
                  return (
                    <Col xs={6} md={3} className="p-0 m-auto">
                      <CategoryBox name={cat.name} image={cat.img} />
                    </Col>
                  );
                })}
              </Row>
            </NavDropdown>
            <Nav.Link>
              <Image
                src="./navbar icons/bookmark-w.svg"
                width="30"
                height="30"
                alt="user img"
              />
            </Nav.Link>
            <Nav.Link>
              <Button
                style={{ borderRadius: '1rem' }}
                className="d-flex align-items-center"
                variant="outline"
              >
                <span className="mr-2">23</span>
                <Image
                  src="./navbar icons/wallet-w.svg"
                  width="28"
                  height="28"
                  alt="wallet img"
                />
              </Button>
            </Nav.Link>
            <Nav.Link href="#home">
              <Image
                src="./navbar icons/usr.jpg"
                width="48"
                height="48"
                alt="user img"
                roundedCircle
              />
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="d-flex align-items-center">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Row style={{ width: '100%' }}>
                {categoriesDB.map((cat) => {
                  return (
                    <Col
                      xs={6}
                      md={3}
                      className="p-0 m-auto"
                      style={{ width: '400px' }}
                    >
                      <CategoryBox name={cat.name} image={cat.img} />
                    </Col>
                  );
                })}
              </Row>
            </NavDropdown>

            <LoginModal />
            <Link to="/register" className="nav-link">
              Sign-Up
            </Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navigation);
