import React from "react";
import Modal from "./Modal";
import SignInForm from "./SignInForm";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link} from 'react-router-dom';

export default (props) => {

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
            <Button className="nav-button"variant="success" onClick={props.redirection}>Sign Up</Button>
            <Modal  buttonText={"Sign in"}> 
              <SignInForm />
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
