import React from 'react'
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'
import cover from '../assets/cover.PNG'
import "../styles/Jumbotron.scss"

export default () => {
    return (
        <Jumbotron fluid className="jumbotron">
            <Container>
                <Row>
                    <Col className="header-col">
                        <h1>Student Medium</h1>
                        <p>Resources for students, by students.</p>
                        <Button variant="success">Sing Up</Button>
                        <Button variant="success">Sing in</Button>
                    </Col>
                    <Col >
                        <Image src={cover} rounded />
                    </Col>
                   
                </Row>
            </Container>
        </Jumbotron>
    )
}