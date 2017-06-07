import React from 'react';

import croissant from '../icons/croissant.svg';
import dinner from '../icons/dinner.svg';
import sandwich from '../icons/sandwich.svg';
import vegan from '../icons/vegan.svg';
import gluten_free from '../icons/gluten_free.svg';

export default (props) => {
  var food;
  if (props.food.length === 0) {
    food = (
      <div className="edit-detail category-detail-div">
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
