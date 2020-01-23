import React from "react";
import app from "../assets/app.jpg";
import { Row, Container, Col, Image } from "react-bootstrap";
import { FaLinkedinIn,FaFacebookF,FaTwitter,FaGithub } from "react-icons/fa";
import "../styles/footer.scss";
export default function footer() {
  function shoot() {
    alert("Great !");
  }
  return (
    <Container className="footer" fluid>
      <Row>
        <Col  style={{ padding: "1rem" }}>
          <Image className="apps" style={{ width: "6rem" }} src={app} rounded></Image>
          <Image className="apps" style={{ width: "6rem", marginLeft: "0.2rem" }} src={app} rounded></Image>
        </Col>
        <Col>
          <p style={{ fontSize: "1.5rem" }}>Follow Us</p>
          <FaLinkedinIn  className="social" size="20" onClick={shoot}/>
          <FaFacebookF  className="social" size="20"/>
          <FaTwitter  className="social" size="20"/>
          <FaGithub className="social" size="20"/>
        </Col>
      </Row>
      <hr className="hr" />
      <Row>
        <Col style={{ fontSize: "0.9rem" }}>
          © 2020 MetaTech. All Rights Reserved.
        </Col>
        <Col className="terms" style={{ fontSize: "0.9rem" }}>
          <span>Job Applicant Privacy Notice</span> <span>Terms</span>
          <span>Conditions</span>
        </Col>
      </Row>
    </Container>
  );
}
//Meta Technonologies company
