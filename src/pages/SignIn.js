import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/Navbar";

const SignIn = () => {
    return(
        <Container style={{paddingTop: "10rem"}}>
            <NavBar />
            <h1>SignIn</h1>
        </Container>
    )
}

export default SignIn;