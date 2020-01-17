import React from "react";
import WelcomeNav from "../components/WelcomeNav";
import WelcomeHeader from "../components/WelcomeHeader";
import WelcomeNumbers from "../components/WelcomeNumbers";
import WelcomeSteps from "../components/WelcomeSteps";
import { Container } from "react-bootstrap";
import "../styles/Welcome.scss";

const Welcome = () => {
  return (
    <Container className="welcome">
      <WelcomeNav />
      <br />
      <WelcomeHeader />
      <br />
      <WelcomeNumbers />
      <br />
      <WelcomeSteps />
    </Container>
  );
};

export default Welcome;
