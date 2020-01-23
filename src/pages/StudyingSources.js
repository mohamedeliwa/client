import React from 'react'
import Container from "react-bootstrap/Container";
import NavBar from "../components/Navbar";
import List from "../components/List"
import Tabs from "../components/Tabs"
import Cards from '../components/Cards'
import { Route, Switch, useRouteMatch } from "react-router-dom"

const StudyingSources = () => {
    let match = useRouteMatch()
    return (
        <Container style={{ paddingTop: "10rem",minHeight:"90vh" }}>
            <NavBar />
            <Switch>
                <Route  exact path={`${match.path}`} >
                    <List/>
                </Route>
                <Route path={`${match.path}/list`}>
                    < Tabs />
                    <Cards/>
                </Route>
            </Switch>
        </Container>
    )
}

export default StudyingSources;