import React from 'react';
import coffee_beans from '../icons/coffee_beans.svg';
import tea from '../icons/tea.svg';
// import location from '../icons/location.svg';
// import note from '../icons/note.svg';

// Components
import Outlets from './Outlets';
import Bathroom from './Bathroom';
import Food from './Food';
import Vibe from './Vibe';

// Styles
import '../styles/cafeDetails.css'

export default class CafeDetails extends React.Component{

  // make this as a function that takes in the coffee and tea detail arguments?
  coffeeTeaQuality = (quality) => {
    if (quality !== null) {
      var qualifier = quality.split(" ")[0]
      return qualifier
    } else {
      return "unknown"
    }
  }

  render(){
    return (
      <div id="cafe-details">
        <div className="category-detail-div">
          <h3>Drinks</h3>
          <div className="category-item-div">
            <img src={coffee_beans} className="detail-icon" alt="coffee beans" />
            <p> {this.coffeeTeaQuality(this.props.cafeDetails.coffeeQuality)} Coffee</p>
          </div>

          <div className="category-item-div">
            <img src={tea} className="detail-icon" alt="tea" />
            <p>{this.coffeeTeaQuality(this.props.cafeDetails.teaQuality)} Tea</p>
          </div>
        </div>

        <div id="amenities" className="multi-detail">
          <Outlets outlets={this.props.cafeDetails.outlets} />
          <Bathroom bathroom={this.props.cafeDetails.genderNeutralRestrooms} />
        </div>

        <Food food={this.props.cafeDetails.food} />
        <Vibe vibe={this.props.cafeDetails.vibe} />
      </div>
    )
  }
}
