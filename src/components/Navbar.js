import React, {useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import '../styles/Navbar.scss';


export default () => {
    //const [expanded, setExpanded] = useState(false)
    return(
        <Navbar className="navbar" expand="lg" variant="light" fixed="top" collapseOnSelect >
            <Container>
                <Navbar.Brand href="#home">Student Medium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Curricula</Nav.Link>
                        <Nav.Link href="#studying_sources">Studying sources</Nav.Link>
                        <Nav.Link href="#student_activities">Student activites</Nav.Link>
                        <Nav.Link href="#shop">Shop</Nav.Link>
                        <NavDropdown title="More.." id="basic-nav-dropdown">
                            <NavDropdown.Item href="#contribute">How to contribute</NavDropdown.Item>
                            <NavDropdown.Item href="#about_sm">About SM</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#contact">Contact us</NavDropdown.Item>
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