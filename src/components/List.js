import React from 'react'
import { Container, Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { FaAngleRight } from "react-icons/fa";
import '../styles/List.scss'
import { Link, useRouteMatch } from 'react-router-dom';
export default function List() {
  let match =useRouteMatch()
  return (
    <Container className="justify-content-center">

      <Card className="items">
        <Card.Body>
          <Card.Title className="items-head">Card Title</Card.Title>
          <hr/>
        </Card.Body>
        <ListGroup className="list-group-flush items-body">

          <div className="items-body-content">
            < Link to={`${match.url}/list`}>About Face: The Essentials of Interaction Design</Link>
            <FaAngleRight className="arrow" />
          </div>
          <div className="items-body-content">
            < Link>About Face: The Essentials of Interaction Design</ Link>
            <FaAngleRight className="arrow" />
          </div>
          <div className="items-body-content">
            <Link>About Face: The Essentials of Interaction Design</ Link>
            <FaAngleRight className="arrow" />
          </div>

        </ListGroup>
      </Card>

    </Container>
  )
}
