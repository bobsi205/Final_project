import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Form,
  FormControl,
  Button,
  Image,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import LoginModal from '../../auth/LoginModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import categoriesData from '../../../utils/categoriesData.json';
import { logout } from '../../../actions/auth';

const Navigation = ({ auth, logout }) => {
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState({ value: '', redirect: false });
  const history = useHistory();

  const searchOnPress = (e) => {
    e.preventDefault();

    let path = `/search/title/${search.value}`;
    history.push(path);
  };
  const onChange = (e) => {
    setSearch({ value: e.target.value, redirect: false });
  };
  return (
    <Navbar className=" p-0" bg="light" expand="lg" sticky="top">
      <Nav className="pt-0">
        <Navbar.Brand className="d-flex m-0" as={Link} to={'/'} eventKey="home">
          <Image className="m-2" src="/logo.svg" width="160" height="40" />

          <Nav.Link
            className="mr-auto"
            as={Link}
            to={'/summaryUpload'}
            eventKey="summaryUpload"
          >
            <Image
              src="/icons/plus-sign.svg"
              width="28"
              height="28"
              alt="plus"
              className="m-1"
            />
          </Nav.Link>
        </Navbar.Brand>
      </Nav>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-between"
        id="basic-navbar-nav"
      >
        {/* left side */}

        <Nav></Nav>

        {/* // center side */}

        <Nav>
          <Form inline onSubmit={(e) => searchOnPress(e)}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => onChange(e)}
              value={search.value}
            />
          </Form>
        </Nav>

        {/* //right side */}
        {auth.isAuthenticated ? (
          <Nav className="d-flex px-auto sm-mr-auto">
            <NavDropdown className="pt-2 mr-sm-0" title="Categories">
              {categoriesData.map((cat) => (
                <div key={cat.id}>
                  <NavDropdown.Item
                    className="d-flex align-items-center px-4 py-2"
                    as={Link}
                    to={`/search/category/${cat.id}`}
                  >
                    <Image
                      className="mr-1"
                      width="16"
                      src={`/cat/catIcon/${cat.id}.svg`}
                    />
                    {cat.name}
                  </NavDropdown.Item>
                  {cat.name == 'Communication' ? false : <Dropdown.Divider />}
                </div>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to={'/profile'} eventKey="bookmark">
              <Image
                className="pt-2"
                src="/Icons/bookmark-w.svg"
                width="30"
                height="30"
                alt="bookmark"
              />
            </Nav.Link>
            <Nav.Link as={Link} to={'/checkout'} eventKey="checkout">
              <Button
                style={{ borderRadius: '1rem' }}
                className="d-flex align-items-center"
                variant="outline"
              >
                <span className="mr-2">{auth.user.balance}</span>
                <Image
                  src={`/Icons/wallet-${auth.user.balance ? 'f' : 'w'}.svg`}
                  width="28"
                  height="28"
                  alt="wallet img"
                />
              </Button>
            </Nav.Link>

            <NavDropdown
              title={
                <Image
                  src={auth.user.picture}
                  width="48"
                  height="48"
                  alt="user img"
                  roundedCircle
                />
              }
              className="nav-profile "
            >
              <Dropdown.Item as={Link} to={'/profile'} eventKey="profile">
                <Image
                  src={auth.user.picture}
                  width="68"
                  height="68"
                  alt="user img"
                  roundedCircle
                />
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={'/profile/edit'}>
                Edit profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="d-flex align-items-center"
                onClick={() => logout()}
              >
                <Image
                  className="mr-1"
                  src="/navIconDrop/power-button.svg"
                  width="16"
                />
                Log Out
              </Dropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="d-flex sm-mr-auto">
            <Link to="/login" className="nav-link">
              Sign-in
            </Link>
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
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
