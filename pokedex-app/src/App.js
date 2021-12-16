import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/layout/Dashboard";
// import backgroundImage from "./pattern.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container" id="cont">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
