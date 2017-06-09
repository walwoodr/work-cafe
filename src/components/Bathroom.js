import React from 'react';
import toilet from '../icons/toilet.svg';
import gendered_toilet from '../icons/gendered_toilet.svg';

export default (props) => {
  var bathroom;
  if (props.bathroom) {
    bathroom = <div className="detail-div" id="gender-neutral">

      <img src={toilet} className="detail-icon" alt="Gender Neutral Restroom" />

      <p>Gender Neutral Restroom</p>

    </div>
  } else if (props.bathroom === false) {
    bathroom = <div className="detail-div" id="gender-neutral">

      <img src={gendered_toilet} className="detail-icon" alt="Gender Segregated Restroom" />

      <p>Gender Segregated Restrooms</p>

    </div>
  } else if (props.editing) {
    let sendAndClearEdit = (value) => {
      props.handleBlur();
      props.handleSend.call(null, "genderNeutralRestrooms", value);
    }
    bathroom = <div className="edit-detail detail-div" id="gender-neutral">

      <p>Are there gender neutral restrooms in this cafe?</p>
      <div className="select-option">
        <button onClick={sendAndClearEdit.bind(null, true)}>Yes!</button>
        <p className="detail-note">At least one gender neutral or single stall restroom</p>
      </div>

      <div className="select-option">
        <button onClick={sendAndClearEdit.bind(null, false)}>No.</button>
        <p className="detail-note">Only gender segregated restrooms</p>
      </div>

      <p className="note" onClick={(e) => props.handleBlur(e)}>click to close</p>

    </div>
  } else {
    bathroom = <div className="edit-detail detail-div" id="gender-neutral" onClick={(e) => props.handleClick(e)}>

      <img src={gendered_toilet} className="detail-icon" alt="Gender Segregated Restroom" />
      <p>Restrooms unknown</p>

      <p className="note">click to edit</p>

    </div>
  }

  return (
    bathroom
  )
}
