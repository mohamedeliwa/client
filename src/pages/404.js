import React from "react";
import { Container } from "react-bootstrap";
import  "../styles/404.scss";
const PageNotFound = () => {
  return (
    <Container>
      <div class="site">
        <div class="sketch">
          <div class="bee-sketch red"></div>
          <div class="bee-sketch blue"></div>
        </div>

        <h1>
          404:
          <small>Players Not Found</small>
        </h1>
      </div>
    </Container>
  );
};

export default PageNotFound;
