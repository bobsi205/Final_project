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
  InputGroup,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import categoriesData from '../../../utils/categoriesData.json';
import { logout } from '../../../actions/auth';

const Navigation = ({ auth, logout }) => {
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
    <Navbar className="p-0" bg="light" expand="lg" sticky="top">
      <Nav className="d-flex flex-direction-row">
        <Navbar.Brand
          className="d-flex p-0 m-0"
          as={Link}
          to={'/'}
          eventKey="home"
        >
          <Image className="m-2" src="/logo.svg" width="160" height="40" />
        </Navbar.Brand>
        <Nav.Link
          className="mr-auto m-0"
          as={Link}
          to={'/summaryUpload'}
          eventKey="summaryUpload"
        >
          <Image
            src="/Icons/plus-sign.svg"
            width="28"
            height="28"
            alt="plus"
            className="m-1"
          />
        </Nav.Link>
      </Nav>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="pt-0 justify-content-between"
        id="basic-navbar-nav"
      >
        {/* left side */}

        <Nav></Nav>

        {/* // center side */}

        <Nav>
          <Form inline onSubmit={(e) => searchOnPress(e)}>
            <InputGroup className="mx-0">
              <FormControl
                style={{ borderRight: 'white' }}
                type="text"
                onChange={(e) => onChange(e)}
                value={search.value}
                placeholder="Search"
              />
              <InputGroup.Prepend>
                <InputGroup.Text
                  style={{ borderLeft: 'white' }}
                  className="bg-white"
                >
                  <Image src="/search.svg" width="18" />
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
        </Nav>

        {/* //right side */}
        {auth.isAuthenticated ? (
          <Nav className="d-flex px-auto sm-mr-auto align-items-center">
            <NavDropdown className="p-0 mr-sm-0" title="Categories">
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

            <Nav.Link as={Link} to={'/checkout'} eventKey="checkout">
              <Button
                style={{ borderRadius: '1rem' }}
                className="p-0 d-flex align-items-center"
                variant="outline"
              >
                <span className="mr-2">{auth.user.balance}</span>
                <Image
                  src={`/Icons/wallet-${auth.user.balance ? 'f' : 'w'}.svg`}
                  width="28"
                  alt="wallet img"
                />
              </Button>
            </Nav.Link>

            <NavDropdown
              title={
                <Image
                  className="p-0"
                  src={auth.user.picture}
                  width="48"
                  height="48"
                  alt="user img"
                  roundedCircle
                />
              }
              className="nav-profile "
            >
              <Dropdown.Item
                className="d-flex m-2 p-2"
                as={Link}
                to={'/profile'}
                eventKey="profile"
              >
                <Image
                  src={auth.user.picture}
                  width="68"
                  height="68"
                  alt="user img"
                  roundedCircle
                />
                <h5 className="p-4">
                  {auth.user.firstName + ' ' + auth.user.lastName}
                </h5>
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
            <NavDropdown className="p-0 mr-sm-0" title="Categories">
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

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
