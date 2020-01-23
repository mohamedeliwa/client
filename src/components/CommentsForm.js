import React from 'react'
import { Container, Card, Button,Form } from 'react-bootstrap'

export default function CommentsForm() {
    return (
     <Container>
           <Card className=" my-4">
          <Card.Header >Leave a Comment:</Card.Header>
          <Card.Body >
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button type="submit" variant="success">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
     </Container>
    )
}
