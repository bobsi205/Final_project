import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Button,
  Image,
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import LoginModal from '../../auth/LoginModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import categoriesData from '../../../utils/categoriesData.json';
import { logout } from '../../../actions/auth';

const Navigation = ({ isAuthenticated, logout }) => {
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState({ value: '', redirect: false });
  const coin = 23;
  const walletStyle = coin ? 'f' : 'w';

  const searchOnPress = (e) => {
    e.preventDefault();

    setSearch({ ...search, redirect: true });
  };
  const onChange = (e) => {
    setSearch({ value: e.target.value, redirect: false });
  };
  return (
    <Navbar className="p-0" bg="light" expand="lg" sticky="top">
      <Navbar.Brand className="m-0" as={Link} to={'/'} eventKey="home">
        <Image src="/logo.svg" width="160" height="40" />
      </Navbar.Brand>
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
        {search.redirect ? (
          <Redirect push to={`/search/title/${search.value}`} />
        ) : (
          <></>
        )}
        {/* //right side */}
        {isAuthenticated ? (
          <Nav
            className="d-flex px-auto sm-mr-auto"
          >
            <NavDropdown className="pt-2 mr-sm-0" title="Categories">
              {categoriesData.map((cat) => (
                <>
                  <NavDropdown.Item
                    className="d-flex align-items-center px-4 py-2"
                    as={Link}
                    to={`/action/${cat.id}`}
                  >
                    <Image
                      className="mr-1"
                      width="16"
                      src={`/cat/catIcon/${cat.id}.svg`}
                    />
                    {cat.name}
                  </NavDropdown.Item>
                  {cat.name == 'Communication' ? false : <Dropdown.Divider />}
                </>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to={'/bookmark'} eventKey="bookmark">
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
                <span className="mr-2">{coin}</span>
                <Image
                  src={`/Icons/wallet-${walletStyle}.svg`}
                  width="28"
                  height="28"
                  alt="wallet img"
                />
              </Button>
            </Nav.Link>

            <NavDropdown
              title={
                <Image
                  src="/lilach-katzabi.jpg"
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
                className="px-auto"
                  src="/lilach-katzabi.jpg"
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
              <Dropdown.Item className="d-flex align-items-center">
                <Image
                  className="mr-1"
                  src="/navIconDrop/down-arrow.svg"
                  width="16"
                />
                Downloads
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <Image
                  className="mr-1"
                  src="/navIconDrop/upload.svg"
                  width="16"
                />
                Uploaded
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <Image
                  className="mr-1"
                  src="/navIconDrop/star.svg"
                  width="16"
                />
                Favorite
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
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navigation);
