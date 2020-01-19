import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Curricula from "./pages/Curricula";
import StudyingSources from './pages/StudyingSources';
import StudentActivities from "./pages/StudentActivities";
import Shop from "./pages/Shop";
import Contribute from "./pages/Contribute";
import Contact from './pages/Contact'; 
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/curricula">
            <Curricula />
          </Route>
          <Route exact path="/studyingsources">
            <StudyingSources />
          </Route>
          <Route exact path="/studentactivities">
            <StudentActivities />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/contribute">
            <Contribute />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
