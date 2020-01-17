import React from 'react'
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import cover from '../assets/cover.PNG'

const WelcomeHeader = () => {
    return(

        <Jumbotron fluid className="introduction">
            <Container>
                <Row>
                    <Col className="header-col">
                        <h1>Student Medium</h1>
                        <p>
                            Studying resources for students, by students.<br />
                            Student Medium provides you with resources you need to easily learn and improve your skills.
                        </p>
                        <Button variant="success" block>Sing Up Now</Button>
                    </Col>
                    <Col className="header-img">
                        <Image src={cover} rounded />
                    </Col>
                
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default WelcomeHeader;