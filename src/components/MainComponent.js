/**
 * MainComponent.js
 * React Week 3
 */

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { CAMPSITES } from "../shared/campsites";

/* ----------------------
Main Component
------------------------ */
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      // Track campsite that was last selected. Start value is null.
      selectedCampsite: null,
    };
  }

  
  /* ----------------------
  onCampsiteSelect()   <Card> Click Event
  Passes campsite obj data to selectedCampsite state
  ------------------------ */
  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>

        <Directory
          campsites={this.state.campsites}
          onClick={campsiteId => this.onCampsiteSelect(campsiteId)}
        />

        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
