import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/Navbar";

const SignUp = () => {
    return(
        <Container style={{paddingTop: "10rem"}}>
            <NavBar />
            <h1>Sign Up</h1>
        </Container>
    )
}

export default SignUp;