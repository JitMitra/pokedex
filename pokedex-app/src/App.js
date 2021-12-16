import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/layout/Dashboard";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";
// import backgroundImage from "./pattern.png";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container" id="cont">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Dashboard />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
