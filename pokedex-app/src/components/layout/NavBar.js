import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
          id="nav"
        >
          <a className="navbar-brand col-sm-3 col-md-2 me-0 align-items-center">
            Pokédex (ver 0.1.0)
          </a>
        </nav>
      </div>
    );
  }
}
