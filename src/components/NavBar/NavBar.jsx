import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import CustomButton from "../Button/Button";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          MyWebsite
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-custom"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">
              Explore
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              Events
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">
              Venue
            </Nav.Link>

            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item href="#action/3.1">Artist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CustomButton buttonText="Login"/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
