import React from 'react';
import coffee from '../icons/coffee_beans.svg';
import tea from '../icons/tea.svg';

export default (props) => {

  var divClasses;
  var editLink;
  if (props.editing) {
    divClasses = "edit-detail category-detail-div";
    editLink = (
      <div onClick={(e) => props.handleBlur(e)}>
        <p className="note">click to close</p>
      </div>
    )
  } else if (props.tea === null || props.coffee === null) {
    divClasses = "edit-detail category-detail-div";
    editLink =(
      <div onClick={(e) => props.handleClick(e)}>
        <p className="note">click to edit</p>
      </div>
    )
  } else {
    divClasses = "category-detail-div"
  }

  var words = (drinkProp, type) => {
    if (drinkProp) {
      return (<p>{drinkProp}</p>)
    } else if (props.editing) {
      let lowerCaseType = type[0].toLowerCase() + type.slice(1);
      return (
        <div>

          <p>What quality is the {type} in this cafe?</p>
          <div className="select-option">
            <button onClick={props.handleSend.bind(null, `${lowerCaseType}Quality`, `Decent ${type}`)}>Decent</button>
            <p className="detail-note">Drinkable</p>
          </div>

          <div className="select-option">
            <button onClick={props.handleSend.bind(null, `${lowerCaseType}Quality`, `Good ${type}`)}>Good</button>
            <p className="detail-note">Enjoyable</p>
          </div>

          <div className="select-option">
            <button onClick={props.handleSend.bind(null, `${lowerCaseType}Quality`, `Exceptional ${type}`)}>Exceptional</button>
            <p className="detail-note">Artisinal</p>
          </div>

        </div>)
    } else {
      return (<p>Unknown {type}</p>)
    }
  }

  return (
    <div className={divClasses}>
      <h3>Drinks</h3>

      <div className="category-item-div">
        <img src={coffee} className="detail-icon" alt="coffee" />
        {words(props.coffee, "Coffee")}
      </div>

      <div className="category-item-div">
        <img src={tea} className="detail-icon" alt="tea" />
        {words(props.tea, "Tea")}
      </div>

      {editLink}
    </div>
  )
}
