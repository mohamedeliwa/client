import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link, useRouteMatch} from 'react-router-dom'
export default function Tabs() {
    let match=useRouteMatch()
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to={`${match.url}/books`} eventKey="Books">Books</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  as={Link} to={`${match.url}/exams`} eventKey="Exams">Exams</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link  as={Link} to={`${match.url}/ay7aga`} eventKey="ay-7aga" >ay 7aga</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
