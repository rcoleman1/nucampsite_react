/**
 * CampsiteInfoComponent.js
 */

import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


/* ----------------------
CampsiteInfo  Component
------------------------ */
// REMOVE class CampsiteInfo extends Component {


/* ----------------------
  renderCampsite(obj) 
  - Create <Card> with (img, name, description) in DOM
  ------------------------ */
function RenderCampsite({campsite}) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
}


/* ----------------------
renderComments(comments) 
- Create comments in DOM
------------------------ */
function RenderComments({comments}) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                {comment.text}
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}{" "}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return <div></div>;
}


function CampsiteInfo(props) {
    // True: If campsite has obj
    if (props.campsite) {
      return (
        <div className="container">
          <div className="row">
            <RenderCampsite campsite={props.campsite} />
            <RenderComments comments={props.campsite.comments} />
          </div>
        </div>
      );
    }
    // False: Return empty div
    return <div></div>;
  }


export default CampsiteInfo;