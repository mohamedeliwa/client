import React from 'react'
import {Jumbotron, Container, Row, Col, Card} from 'react-bootstrap'

const WelcomeNumbers = () => {
    return(
        <Jumbotron fluid className="numbers">
            <Container>
                <Row>
                    <Col>
                        <Card className="numberCard">
                            <Card.Body>
                                <Card.Title><b>2,028</b></Card.Title>
                                <Card.Subtitle><b>Students & Teachers</b></Card.Subtitle>
                                <Card.Text  className="mb-2 text-muted"> <br />
                                We launch remote developer teams from all skill levels, from all timezones, and from most web dev languages & frameworks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="numberCard">
                            <Card.Body>
                                <Card.Title><b>11,150+</b></Card.Title>
                                <Card.Subtitle><b>Studying Resources</b></Card.Subtitle>
                                <Card.Text  className="mb-2 text-muted"> <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="numberCard">
                            <Card.Body>
                                <Card.Title><b>3,200+</b></Card.Title>
                                <Card.Subtitle ><b>Real Exams</b></Card.Subtitle>
                                <Card.Text  className="mb-2 text-muted"> <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default WelcomeNumbers;