import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../components/Navbar";
import Index from "../components/Index";
import Docs from "../components/Docs";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
const Curricula = () => {
  let match = useRouteMatch();
  return (
    <Container style={{ paddingTop: "10rem",minHeight:"90vh" }}>
      <NavBar />

      <Switch>
        <Route exact path={`${match.path}`}>
          <Link to={`${match.url}/index`}>
            <h1>Curricula</h1>
          </Link>
        </Route>
        <Route exact path={`${match.path}/index`}>
          <Index />
        </Route>
        <Route path={`${match.path}/index/docs`}>
          <Docs />
        </Route>
      </Switch>
    </Container>
  );
};

export default Curricula;
