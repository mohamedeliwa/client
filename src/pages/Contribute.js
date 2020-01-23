import React from 'react'
import { Container, Card } from "react-bootstrap";
import NavBar from "../components/Navbar";

const Contribute = () => {
    return(
        <Container style={{ paddingTop: "15rem",minHeight:"90vh" }}>
            <NavBar />
            <Container style={{
               boxShadow: "10px 10px 5px lightgrey",
               maxWidth: "50rem",
               padding: "0.3rem",
               border: "1px solid #eee"

            }}>
                <Card>
                    <Card.Header as="h1" className="text-light bg-dark">You are here to help?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Awesome, feel welcome and read the following sections to know how to supply resources and how to write or review curricula articles.
                        </Card.Text>

                        <Card.Title as="h4" className="text-dark bg-light">Contributing to studying sources</Card.Title>
                        <Card.Text>
                            If you want to help out with studying sources section, then if the data you want to supply is already uploaded online contact us through this form.<br />
                            And if it's locally stored and not uploaded online contact us through this form
                        </Card.Text>

                        <Card.Title as="h4" className="text-dark bg-light">Contributing to curricula Docs</Card.Title>
                        <Card.Text>
                            If you want to deep dive and help out with SM curricula, then if you want to add totally new article that doesn't exist on SM curricula, contact us through this form.<br />
                            But if you want to modify some already existing articles contact us through this form
                        </Card.Text>

                        <Card.Title as="h4" className="text-dark bg-light">Report any typo or problem</Card.Title>
                        <Card.Text>
                            To report any typo or problem, use this form.
                        </Card.Text>
                        

                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}
export default Contribute;