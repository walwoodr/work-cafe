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
      return (
        <div onClick={(e)=>props.handleBlur(e)}>
          <form>
            
          </form>
          <p className="note">click to close</p>
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
