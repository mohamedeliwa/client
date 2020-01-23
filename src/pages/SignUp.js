import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm"
import  "../styles/SignInUpPage.scss"
const SignUp = () => {
    return(
        <Container style={{paddingTop: "10rem",minHeight:"90vh"}} className="signup">
            <NavBar />
            {/* <h1>Sign Up</h1> */}
            <SignUpForm/>
        </Container>
    )
}

export default SignUp;