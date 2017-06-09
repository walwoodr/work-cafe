import React from 'react';
import coffee from '../icons/coffee_beans.svg';
import tea from '../icons/tea.svg';

export default (props) => {

  var divClasses;
  if (props.tea === null || props.coffee === null) {
    divClasses = "edit-detail category-detail-div"
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

          <p className="note" onClick={(e)=>props.handleBlur(e)}>click to close</p>
        </div>)
    } else {
      return (<div onClick={(e) => props.handleClick(e)}><p>Unknown {type}</p><p className="note">click to edit</p></div>)
    }
  }

  return (
    <div className={divClasses}>
      <h3>Drinks</h3>

      <div className="category-item-div">
        <img src={coffee} className="detail-icon" alt="coffee" />
        <p>{words(props.coffee, "Coffee")}</p>
      </div>

      <div className="category-item-div">
      <img src={tea} className="detail-icon" alt="tea" />
      <p>{words(props.tea, "Tea")}</p>
      </div>

    </div>
  )
}
