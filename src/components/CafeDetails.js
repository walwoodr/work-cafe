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

  handleCoffeeTeaClick = (e) => {
    this.props.editingDetail("coffeeTea");
  }

  handleBathroomClick = (e) => {
    this.props.editingDetail("bathroom");
  }

  handleFoodClick = (e) => {
    this.props.editingDetail("food");
  }

  handleVibeClick = (e) => {
    this.props.editingDetail("vibe");
  }

  handleBlur = (e) => {
    this.props.editingDetail("");
  }

  handleSend = (id, property, value) => {
    this.props.modifyCafe(id, property, value);
  }

  render(){
    return (
      <div id="cafe-details">

        <CoffeeTea
          coffee={this.props.cafeDetails.coffeeQuality}
          tea={this.props.cafeDetails.teaQuality}
          handleClick={this.handleCoffeeTeaClick}
          editing={this.props.editing === "coffeeTea" ? true : false}
          handleBlur={this.handleBlur}
          handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
        />

        <div id="amenities" className="multi-detail">
          <Outlets
            outlets={this.props.cafeDetails.outlets}
            handleClick={this.handleOutletClick}
            editing={this.props.editing === "outlet" ? true : false}
            handleBlur={this.handleBlur}
            handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
          />
          <Bathroom
            bathroom={this.props.cafeDetails.genderNeutralRestrooms}
            handleClick={this.handleBathroomClick}
            editing={this.props.editing === "bathroom" ? true : false}
            handleBlur={this.handleBlur}
            handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
          />
        </div>

        <Food
          food={this.props.cafeDetails.food}
          handleClick={this.handleFoodClick}
          editing={this.props.editing === "food" ? true : false}
          handleBlur={this.handleBlur}
        />

        <Vibe
          vibe={this.props.cafeDetails.vibe}
          handleClick={this.handleVibeClick}
          editing={this.props.editing === "vibe" ? true : false}
          handleBlur={this.handleBlur}
        />

      </div>
    )
  }
}
