import React from 'react'
import Container from "react-bootstrap/Container";
import NavBar from "../components/Navbar";
import BlogHome from '../components/BlogHome'
import BlogPost from '../components/BlogPost'
import {Route, Switch, useRouteMatch} from 'react-router-dom'

const Blog = () => {
    let match = useRouteMatch()
    return (
        <Container style={{ paddingTop: "5rem" }}>
           
                <NavBar />
            <Switch>        
                <Route exact path={`${match.path}`}>
                    <BlogHome />
                </Route>
                <Route path={`${match.path}/post`}>
                    <BlogPost />
                </Route>
            </Switch>
        </Container>
    )
}

export default Blog;