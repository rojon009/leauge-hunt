import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LeagueDetailsPage from "./components/LeagueDetailsPage/LeagueDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/league/:id">
          <LeagueDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
