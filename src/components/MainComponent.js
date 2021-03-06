/**
 * MainComponent.js
 * React Week 3
 */

import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {Switch, Route, Redirect, withRouter, } from 'react-router-dom';
import {connect } from 'react-redux';


/* ----------------------
Main Component
------------------------ */
const mapStateToProps = state => {
  return {
    campsite: state.campsite,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions
  }
}

/* ----------------------
Main Component
------------------------ */
class Main extends Component {
  
  render() {
    /* ----------------------
    HomePage Component
    ------------------------ */
    const HomePage = () => {
      return (
        <Home 
          campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
          promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.props.partners.filter(partner => partner.featured)[0]}
        />
      )
    }


    /* ----------------------
    Main Component
    ------------------------ */
    const CampsiteWithId = ({match}) => {
      return(
        <CampsiteInfo 
          campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
          comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
        />
      )
    }
    
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={ ()=> <Directory campsites={this.state.campsites}
          />} />
          <Route path='/directory/:campsiteId' component={CampsiteWithId} />
          <Route exact path='/contactus' component={Contact} />

          <Route exact path='/aboutUs' render={ ()=> <About partners={this.state.partners}/> } />

          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateTopProps)(Main));
