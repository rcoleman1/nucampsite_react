/**
 * DirectoryComponents.js
 * React Week 2
 * Section: React Components
 * Exercise: React Components Part 1
 */

// Import React and Component classes
import React, { Component } from 'react';
import App from '../App';

// Create new component from Component
class Directory extends Component {
    // If you use a constructor method, you must props as an argument.
    constructor(props){
        // super(props) must be the first line and is required by React
        super(props);

        // state is defined in the constructor
        // must always hold an object.
        this.state = {
            campsites: [
                {
                    id: 0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                  id: 1,
                  name: 'Chrome River Campground ',
                  image: 'assets/images/chrome-river.jpg',
                  elevation: 877,
                  description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ]
        };
    }

    // Every React component must return a react element.
    // You must wrap your return statement inside render()
    render(){
        // Map over the array of elements
        // Build the div elements using array data on each iteration.
        const directory = this.state.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>  
                    <p>{campsite.description}</p>  
                </div>
            );
        })
        
        // Return the component
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>  
            </div>
        );
    }
}

export default Directory;