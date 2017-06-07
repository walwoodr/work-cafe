// Libs
import React from 'react';

// Components
import Outlets from './Outlets';
import Bathroom from './Bathroom';
import Food from './Food';
import Vibe from './Vibe';
import CoffeeTea from './CoffeeTea';

// Styles
import '../styles/cafeDetails.css'

export default class CafeDetails extends React.Component{

  handleOutletClick = (e) => {
    this.props.editingDetail("outlet");
  }

  render(){
    return (
      <div id="cafe-details">

        <CoffeeTea
          coffee={this.props.cafeDetails.coffeeQuality}
          tea={this.props.cafeDetails.teaQuality}
        />

        <div id="amenities" className="multi-detail">
          <Outlets
            outlets={this.props.cafeDetails.outlets}
            handleClick={this.handleOutletClick}
            editing={this.props.editing === "outlet" ? true : false}
          />
          <Bathroom
            bathroom={this.props.cafeDetails.genderNeutralRestrooms}
          />
        </div>

        <Food
          food={this.props.cafeDetails.food}
        />

        <Vibe
          vibe={this.props.cafeDetails.vibe}
        />

      </div>
    )
  }
}
