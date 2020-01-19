import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/Navbar";

const StudentActivities = () => {
    return(
        <Container style={{paddingTop: "10rem"}}>
            <NavBar />
            <h1>Student Activities</h1>
        </Container>
    )
}

export default StudentActivities;