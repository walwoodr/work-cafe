import React from 'react';

import croissant from '../icons/croissant.svg';
import dinner from '../icons/dinner.svg';
import sandwich from '../icons/sandwich.svg';
import vegan from '../icons/vegan.svg';
import gluten_free from '../icons/gluten_free.svg';

export default (props) => {
  var food;
  if (props.editing) {

    let selectedFood = props.food;

    var addToFood = (name) => {
      if (!selectedFood.includes(name)) {
        selectedFood = selectedFood.concat(name)
      } else {
        let idx = selectedFood.indexOf(name);
        selectedFood = [].concat(selectedFood.slice(0, idx), selectedFood.slice(idx+1, selectedFood.length))
      }
      props.handleSend("food", selectedFood);
    };

    food = (
      <div className="edit-detail category-detail-div">
        <h3>Food</h3>

        <div className={selectedFood.includes("pastries") ? "category-item-div multi-option-selected" : "category-item-div multi-option" } onClick={addToFood.bind(null, "pastries")}>
          <img src={croissant} className="detail-icon" alt="pastries" />
          <p>Pastries</p>
        </div>

        <div className={selectedFood.includes("vegan") ? "category-item-div multi-option-selected" : "category-item-div multi-option" } onClick={addToFood.bind(null, "vegan")}>
          <img src={vegan} className="detail-icon" alt="vegan" />
          <p>Vegan Options</p>
        </div>

        <div className={selectedFood.includes("gluten free") ? "category-item-div multi-option-selected" : "category-item-div multi-option" } onClick={addToFood.bind(null, "gluten free")}>
          <img src={gluten_free} className="detail-icon" alt="gluten free" />
          <p>Gluten Free</p>
        </div>

        <div className={selectedFood.includes("light meal") ? "category-item-div multi-option-selected" : "category-item-div multi-option" } onClick={addToFood.bind(null, "light meal")}>
          <img src={sandwich} className="detail-icon" alt="light meal" />
          <p>Light Meal</p>
        </div>

        <div className={selectedFood.includes("full meal") ? "category-item-div multi-option-selected" : "category-item-div multi-option" } onClick={addToFood.bind(null, "full meal")}>
          <img src={dinner} className="detail-icon" alt="full meal" />
          <p>Full Meal</p>
        </div>
        <br />

        <button className="select-option" onClick={(e)=>props.handleBlur(e)}>
          Done
        </button>

      </div>
    )
  } else if (props.food.length === 0) {
    food = (
      <div className="edit-detail category-detail-div" onClick={(e) => props.handleClick(e)}>
        <h3>Food</h3>

        <img src={croissant} className="detail-icon" alt="pastries" />
        <p>Food unknown</p>
        <p className="note">click to edit</p>

      </div>
    )
  } else {
    food = (
      <div className="category-detail-div">
        <h3>Food</h3>

        {props.food.includes("pastries") ?
          <div className="category-item-div">
            <img src={croissant} className="detail-icon" alt="pastries" />
            <p>Pastries</p>
          </div>
        : ''}

        {props.food.includes("vegan") ?
          <div className="category-item-div">
            <img src={vegan} className="detail-icon" alt="vegan" />
            <p>Vegan Options</p>
          </div>
        : ''}

        {props.food.includes("gluten free") ?
          <div className="category-item-div">
            <img src={gluten_free} className="detail-icon" alt="gluten free" />
            <p>Gluten Free</p>
          </div>
        : ''}

        {props.food.includes("light meal") ?
          <div className="category-item-div">
            <img src={sandwich} className="detail-icon" alt="light meal" />
            <p>Light Meal</p>
          </div>
        : ''}

        {props.food.includes("full meal") ?
          <div className="category-item-div">
            <img src={dinner} className="detail-icon" alt="full meal" />
            <p>Full Meal</p>
          </div>
        : ''}
     </div>
   )
  };

  return (
    food
  )
}
