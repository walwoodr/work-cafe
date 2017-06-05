import React from 'react';
import many_outlets from '../icons/many_outlets.svg';
import coffee_beans from '../icons/coffee_beans.svg';
import croissant from '../icons/croissant.svg';
import dinner from '../icons/dinner.svg';
import few_outlets from '../icons/few_outlets.svg';
import kids from '../icons/kids.svg';
import location from '../icons/location.svg';
import networking from '../icons/networking.svg';
import note from '../icons/note.svg';
import sandwich from '../icons/sandwich.svg';
import some_outlets from '../icons/some_outlets.svg';
import tea from '../icons/tea.svg';
import vegan from '../icons/vegan.svg';
import working from '../icons/working.svg';
import gluten_free from '../icons/gluten_free.svg';
import '../styles/cafeDetails.css'

export default (props) => {
  var outlets;
  if (props.cafeDetails.details.outlets === "many") {
    outlets = <div className="detail-div"><img src={many_outlets} className="detail-icon" alt="many outlets" /><p>Many outlets</p></div>
  } else if (props.cafeDetails.details.outlets === "some") {
    outlets =
    <div className="detail-div"><img src={some_outlets} className="detail-icon" alt="some outlets" /><p>Some outlets</p></div>
  } else {
    outlets = <div className="detail-div"><img src={few_outlets} className="detail-icon" alt="few outlets" /><p>Few outlets</p></div>
  }

  // make this as a function that takes in the coffee and tea detail arguments?
  var coffeeTeaQuality = function(quality){
    if (quality === "low") {
      return "Decent"
    } else if (quality === "medium") {
      return "Good"
    } else {
      return "Exceptional"
    }
  }

  var food = <div className="category-detail-div">
                <h3>Food</h3>
                {props.cafeDetails.details.food.includes("pastries") ? <div className="category-item-div"><img src={croissant} className="detail-icon" alt="pastries" /><p>Pastries</p></div> : ''}
                {props.cafeDetails.details.food.includes("vegan") ? <div className="category-item-div"><img src={vegan} className="detail-icon" alt="vegan" /><p>Vegan Options</p></div> : ''}
                {props.cafeDetails.details.food.includes("gluten free") ? <div className="category-item-div"><img src={gluten_free} className="detail-icon" alt="gluten free" /><p>Gluten Free</p></div> : ''}
                {props.cafeDetails.details.food.includes("light meal") ? <div className="category-item-div"><img src={sandwich} className="detail-icon" alt="light meal" /><p>Light Meal</p></div> : ''}
                {props.cafeDetails.details.food.includes("full meal") ? <div className="category-item-div"><img src={dinner} className="detail-icon" alt="full meal" /><p>Full Meal</p></div> : ''}
             </div>;

  var vibe = <div id="vibe">
              {props.cafeDetails.details.vibe.includes("families") ? <div className="detail-div"><img src={kids} className="detail-icon" alt="families" /><p>Families</p></div> : ''}
              {props.cafeDetails.details.vibe.includes("working") ? <div className="detail-div"><img src={working} className="detail-icon" alt="working" /><p>Working</p></div> : ''}
              {props.cafeDetails.details.vibe.includes("networking") ? <div className="detail-div"><img src={networking} className="detail-icon" alt="networking" /><p>Networking</p></div> : ''}
            </div>;

  return (
    <div id="cafe-details">
      <div className="category-detail-div">
      <h3>Drinks</h3>
      <div className="category-item-div"><img src={coffee_beans} className="detail-icon" alt="coffee beans" /><p> {coffeeTeaQuality(props.cafeDetails.details.coffeeQuality)} Coffee</p></div>
      <div className="category-item-div"><img src={tea} className="detail-icon" alt="tea" /><p>{coffeeTeaQuality(props.cafeDetails.details.teaQuality)} Tea</p></div>
      </div>
      {outlets}
      {food}
      {vibe}
    </div>
  )
}
