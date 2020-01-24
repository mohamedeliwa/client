import React from "react";
import WelcomeNav from "../components/WelcomeNav";
import WelcomeHeader from "../components/WelcomeHeader";
import WelcomeNumbers from "../components/WelcomeNumbers";
import WelcomeProcess from "../components/WelcomeProcess";
import { Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import "../styles/Welcome.scss";

const Welcome = () => {

  let history = useHistory();

  const handleRedirection = (e) => {
    e.preventDefault();
    history.push('/signup')
  }

  return (
    <Container className="welcome">
      <WelcomeNav redirection={handleRedirection}/>
      <br />
      <WelcomeHeader redirection={handleRedirection}/>
      <br />
      <WelcomeNumbers />
      <br />
      <WelcomeProcess />
    </Container>
  );
};

export default Welcome;
