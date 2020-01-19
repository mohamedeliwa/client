import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default () => {
  return (
    <Navbar
      className="navbar"
      expand="sm"
      variant="light"
      fixed="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={ Link } to="/home">Student Medium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={ Link } to="/signin">Sign In</Nav.Link>
            <Nav.Link as={ Link } to="/signup">Sign Up</Nav.Link>
            <Button variant="outline-success">Sing in</Button>
            <Button variant="success">Sing Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
