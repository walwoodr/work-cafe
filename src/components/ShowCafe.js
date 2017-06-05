import React from 'react';
import '../styles/showCafe.css';
import CafeDetails from './CafeDetails';
import CafeInput from './CafeInput';

const cafeDetails = {
  name: "Blue Moon",
  zip: "55406",
  address: "Lake Street and 39th Avenue South, Minenapolis MN",
  hours: "7am-10pm Every day",
  website: "bluemooncoffeecafe.com",
  details: {
    outlets: "some",
    vibe: ["families", "networking", "people working"],
    food: ["pastries", "vegan", "light meal", "full meal", "gluten free"],
    genderNeutralRestrooms: true,
    coffeeQuality: "medium",
    teaQuality: "medium",
    notes: [
      {
        user: "Cindy",
        note: "I love this place!",
        validated: true,
      }, {
        user: "Rachel",
        note: "Nice place to work",
        validated: false,
      }, {
        user: "Amanda",
        note: "Queer friendly",
        validated: true,
      }
    ]
  }
};

const props = {cafeDetails: cafeDetails};

export default class ShowCafe extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="three columns padding-div"><p>.</p></div>
        <div id="show-cafe" className="six columns">
          <h2>{props.cafeDetails.name}</h2>
          <CafeDetails cafeDetails={props.cafeDetails} />
          <CafeInput />
        </div>
        <div className="three columns padding-div"><p>.</p></div>
      </div>
    )
  }
}
