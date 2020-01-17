import React from 'react';
import '../styles/Home.scss'
import NavBar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import {Container} from 'react-bootstrap'

const Home = () => {
    return (
        <Container className="home">
            <NavBar />
            <Jumbotron />
            
        </Container>
    )
}

export default Home;