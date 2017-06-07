import React from 'react';
import many_outlets from '../icons/many_outlets.svg';
import coffee_beans from '../icons/coffee_beans.svg';
import croissant from '../icons/croissant.svg';
import dinner from '../icons/dinner.svg';
import few_outlets from '../icons/few_outlets.svg';
import kids from '../icons/kids.svg';
import networking from '../icons/networking.svg';
import sandwich from '../icons/sandwich.svg';
import some_outlets from '../icons/some_outlets.svg';
import tea from '../icons/tea.svg';
import vegan from '../icons/vegan.svg';
import working from '../icons/working.svg';
import gluten_free from '../icons/gluten_free.svg';
import toilet from '../icons/toilet.svg';
// import location from '../icons/location.svg';
// import note from '../icons/note.svg';
import '../styles/cafeDetails.css'

export default (props) => {
  console.log("props")
  console.log(props)
  var outlets;
  if (props.cafeDetails.outlets === "many") {
    outlets = <div className="detail-div"><img src={many_outlets} className="detail-icon" alt="many outlets" /><p>Many outlets</p></div>
  } else if (props.cafeDetails.outlets === "some") {
    outlets =
    <div className="detail-div"><img src={some_outlets} className="detail-icon" alt="some outlets" /><p>Some outlets</p></div>
  } else if (props.cafeDetails.outlets === "few"){
    outlets = <div className="detail-div"><img src={few_outlets} className="detail-icon" alt="few outlets" /><p>Few outlets</p></div>
  } else {
    outlets = ''
  }

  var bathroom;
  props.cafeDetails.genderNeutralRestrooms ? bathroom=<div className="detail-div" id="gender-neutral"><img src={toilet} className="detail-icon" alt="Gender Neutral Restroom" /><p>Gender Neutral Restroom</p></div> : bathroom='';

  // make this as a function that takes in the coffee and tea detail arguments?
  var coffeeTeaQuality = function(quality){
    if (quality !== null) {
      var qualifier = quality.split(" ")[0]
      return qualifier
    } else {
      return "unknown"
    }
  }

  var food;

  if (props.cafeDetails.food !== []) {
    food = (<div className="category-detail-div">
                  <h3>Food</h3>
                  {props.cafeDetails.food.includes("pastries") ? <div className="category-item-div"><img src={croissant} className="detail-icon" alt="pastries" /><p>Pastries</p></div> : ''}
                  {props.cafeDetails.food.includes("vegan") ? <div className="category-item-div"><img src={vegan} className="detail-icon" alt="vegan" /><p>Vegan Options</p></div> : ''}
                  {props.cafeDetails.food.includes("gluten free") ? <div className="category-item-div"><img src={gluten_free} className="detail-icon" alt="gluten free" /><p>Gluten Free</p></div> : ''}
                  {props.cafeDetails.food.includes("light meal") ? <div className="category-item-div"><img src={sandwich} className="detail-icon" alt="light meal" /><p>Light Meal</p></div> : ''}
                  {props.cafeDetails.food.includes("full meal") ? <div className="category-item-div"><img src={dinner} className="detail-icon" alt="full meal" /><p>Full Meal</p></div> : ''}
               </div>)
  } else {
    food = ''
  }

  var vibe = <div id="vibe" className="multi-detail">
              {props.cafeDetails.vibe.includes("working") ? <div className="detail-div"><img src={working} className="detail-icon" alt="working" /><p>Working</p></div> : ''}
              {props.cafeDetails.vibe.includes("networking") ? <div className="detail-div"><img src={networking} className="detail-icon" alt="networking" /><p>Networking</p></div> : ''}
              {props.cafeDetails.vibe.includes("families") ? <div className="detail-div"><img src={kids} className="detail-icon" alt="families" /><p>Families</p></div> : ''}
            </div>;

  return (
    <div id="cafe-details">
      <div className="category-detail-div">
      <h3>Drinks</h3>
      <div className="category-item-div"><img src={coffee_beans} className="detail-icon" alt="coffee beans" /><p> {coffeeTeaQuality(props.cafeDetails.coffeeQuality)} Coffee</p></div>
      <div className="category-item-div"><img src={tea} className="detail-icon" alt="tea" /><p>{coffeeTeaQuality(props.cafeDetails.teaQuality)} Tea</p></div>
      </div>
      <div id="amenities" className="multi-detail">{outlets}{bathroom}</div>
      {food}
      {vibe}
    </div>
  )
}
