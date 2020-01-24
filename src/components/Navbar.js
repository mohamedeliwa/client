import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";

export default () => {
    //const [expanded, setExpanded] = useState(false)
    return(
        <Navbar className="navbar" expand="lg" variant="light" fixed="top" collapseOnSelect >
            <Container>
                <Navbar.Brand as={ Link } to="/">Student Medium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={ Link } to="/curricula">Curricula</Nav.Link>
                        <Nav.Link as={ Link } to="/studyingsources">Studying sources</Nav.Link>
                        <Nav.Link as={ Link } to="/blog">Blog</Nav.Link>
                        <NavDropdown title="More.." id="basic-nav-dropdown">
                            <NavDropdown.Item as={ Link } to="/contribute">How to contribute</NavDropdown.Item>
                            <NavDropdown.Item href="#about_sm">About SM</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={ Link } to="/contact">Contact us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse> 
             </Container> 
         </Navbar>
    )
}