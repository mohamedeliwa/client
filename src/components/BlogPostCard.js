import React from 'react'
import { Container, Card,Button } from 'react-bootstrap'
import {Link, useRouteMatch } from 'react-router-dom'
export default function BlogPostCard() {
    let match = useRouteMatch()
    return (
        <Container>
        <Card className=" mb-4">
            <Card.Img variant="top" src="http://placehold.it/750x300" alt="Card image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                {/* <a href="#" class="btn btn-primary">Read More &rarr;</a> */}
                <Button as={Link} to={`${match.url}/post`} variant="primary">Read More &rarr;</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"> Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a></small>
            </Card.Footer>
        </Card>
    </Container>
    )
}
