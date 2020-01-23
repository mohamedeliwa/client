import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/Navbar";

const Blog = () => {
    return(
        <Container style={{paddingTop: "10rem",minHeight:"90vh"}}>
            <NavBar />
            <h1>Blog</h1>
        </Container>
    )
}

export default Blog;