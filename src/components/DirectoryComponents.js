/**
 * DirectoryComponents.js
 * React Week 2
 * Section: React Components
 * Exercise: React Components Part 1
 */

// Import React and Component classes
import React, { Component } from "react";
// Import CampsiteInfo
import CampsiteInfo from "./CampsiteInfoComponent"

// Import components from Reactstrap
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

// import App from '../App';

// Create new component from Component
class Directory extends Component {
  // If you use a constructor method, you must props as an argument.
  constructor(props) {
    // super(props) must be the first line and is required by React
    super(props);

    // state is defined in the constructor
    // must always hold an object.
    this.state = {
        // Track campsite that was last selected. Start value is null.
        selectedCampsite: null
    };
  }

  // Click Event on campsite <Card>
  // campsite is passed to selected the campsite in locale state
  onCampsiteSelect(campsite) {
      this.setState({selectedCampsite: campsite});
  }

  
  // Every React component must return a react element.
  // You must wrap your return statement inside render()
  render() {
    // Map over the array of elements
    // Build the div elements using array data on each iteration.
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={ ()=> this.onCampsiteSelect(campsite) }>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    // Return the component
    return (
      <div className="container">
        <div className="row">{directory}</div>

        <CampsiteInfo campsite={this.state.selectedCampsite}/>
      </div>
    );
  }
}

export default Directory;