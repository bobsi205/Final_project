import React from "react";
import {
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Nav,
} from "react-bootstrap";
import { FaRegPlusSquare,FaCoins, FaSearch } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

export default function Navigate() {
  return (
    <Navbar bg="light" expand="lg" className="m-auto">
      {/* right side */}
      <Nav className="mr-auto">
        <Navbar.Brand href="#home">Summary</Navbar.Brand>
        <Button variant="outline-dark">
          <FaRegPlusSquare />
        </Button>
      </Nav>

      <Form inline className="m-auto">
        <Button variant="outline-dark">
          <FaSearch />
        </Button>
        <FormControl type="text" placeholder="Search..." />
      </Form>
      {/* left side */}

      <Nav className="ml-auto">
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Math</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Computer</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
        </NavDropdown>

        <Nav.Link href="#Favorites">Favorites</Nav.Link>
        <Button variant="outline-dark">
          <FaCoins />
          <GrUserManager />
        </Button>
      </Nav>
    </Navbar>
  );
}
