import React, { Component } from "react";
// Import components from Reactstrap
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class CampsiteInfo extends Component {
  //
  renderCampsite(campsite) {
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

  // Create Comments
  // 
  renderComments(comments) {
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

  // Main render()
  render() {
    // True: If campsite has obj
    if (this.props.campsite) {
      return (
        <div className="row">
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    }

    // False: Return empty div
    return <div></div>;
  }
}
