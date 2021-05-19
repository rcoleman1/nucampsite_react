/**
 * DirectoryComponent.js
 * React Week 2
 * Section: React Components
 * Exercise: React Components Part 1
 */

import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


/* ----------------------
RenderDirectoryItem(props) Component
- render each card with different campsite details
------------------------ */
function RenderDirectoryItem({ campsite, onClick }) {
  return (
    <Card onClick={() => onClick(campsite.id)}>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}


/* ----------------------
Directory(props) Component
------------------------ */
function Directory(props) {
    // Map campsite array
    // Use <RenderDirectoryItem /> to build the div elements using data from array.
    const directory = props.campsites.map(campsite => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <RenderDirectoryItem campsite={campsite} onClick={props.onClick}/>
        </div>
      );
    });

    // Return the component
    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
}

export default Directory;
