// Libs
import React from 'react';

// Components
import Outlets from '../components/Outlets';
import Bathroom from '../components/Bathroom';
import Food from '../components/Food';
import Vibe from '../components/Vibe';
import CoffeeTea from '../components/CoffeeTea';

// Styles
import '../styles/cafeDetails.css'

export default class CafeDetails extends React.Component{

  handleBlur = (e) => {
    this.props.editingDetail("");
  }

  handleSend = (id, property, value) => {
    this.props.modifyCafe(id, property, value);
  }

  componentDidUpdate(){
    if (this.props.editing === "coffeeTea" && this.props.cafeDetails.coffeeQuality !== null && this.props.cafeDetails.teaQuality !== null){
      this.props.editingDetail("")
    }
  }

  render(){
    return (
      <div id="cafe-details">

        <CoffeeTea
          coffee={this.props.cafeDetails.coffeeQuality}
          tea={this.props.cafeDetails.teaQuality}
          handleClick={this.props.editingDetail.bind(null, "coffeeTea")}
          editing={this.props.editing === "coffeeTea" ? true : false}
          handleBlur={this.handleBlur}
          handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
        />

        <div id="amenities" className="multi-detail">
          <Outlets
            outlets={this.props.cafeDetails.outlets}
            handleClick={this.props.editingDetail.bind(null, "outlet")}
            editing={this.props.editing === "outlet" ? true : false}
            handleBlur={this.handleBlur}
            handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
          />
          <Bathroom
            bathroom={this.props.cafeDetails.genderNeutralRestrooms}
            handleClick={this.props.editingDetail.bind(null, "bathroom")}
            editing={this.props.editing === "bathroom" ? true : false}
            handleBlur={this.handleBlur}
            handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
          />
        </div>

        <Food
          food={this.props.cafeDetails.food}
          handleClick={this.props.editingDetail.bind(null, "food")}
          editing={this.props.editing === "food" ? true : false}
          handleBlur={this.handleBlur}
          handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
        />

        <Vibe
          vibe={this.props.cafeDetails.vibe}
          handleClick={this.props.editingDetail.bind(null, "vibe")}
          editing={this.props.editing === "vibe" ? true : false}
          handleBlur={this.handleBlur}
          handleSend={this.handleSend.bind(null, this.props.cafeDetails.id)}
        />

      </div>
    )
  }
}
