/**
 * HeaderComponent.js
 */

import React, { Component } from "react";
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {
    render() {
        return (
          <React.Fragment>
            <Jumbotron className="fluid">
              <div className="row">
                <div className="col">
                  <h1>NuCamp</h1>
                  <h2>a better way to camp</h2>
                </div>
              </div>
            </Jumbotron>

            <Navbar dark sticky="top">
              <div className="container">
                <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
            </Navbar>
          </React.Fragment>
        );
    }
}


export default Header;