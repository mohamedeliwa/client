import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";

const WelcomeSteps = () => {
  return (
    <div className="steps">
      <p className="stepsHeader">Student Medium Provides</p>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Curricula</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Lectures</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Shop</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p style={{ textAlign: "left" }}>
                  Sources of studying collected by other students and made
                  available to you in one place. SM curricula written and
                  reviewed by students and made available here always for free.
                  Blog where you can share your Educational articles. Shop where
                  you can find the tools you need in your study.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p style={{ textAlign: "left" }}>
                  Sources of studying collected by other students and made
                  available to you in one place. SM curricula written and
                  reviewed by students and made available here always for free.
                  Blog where you can share your Educational articles. Shop where
                  you can find the tools you need in your study.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p style={{ textAlign: "left" }}>
                  Sources of studying collected by other students and made
                  available to you in one place. SM curricula written and
                  reviewed by students and made available here always for free.
                  Blog where you can share your Educational articles. Shop where
                  you can find the tools you need in your study.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <p style={{ textAlign: "left" }}>
                  Sources of studying collected by other students and made
                  available to you in one place. SM curricula written and
                  reviewed by students and made available here always for free.
                  Blog where you can share your Educational articles. Shop where
                  you can find the tools you need in your study.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default WelcomeSteps;
