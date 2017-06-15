//Libs
import React from 'react';
import ReactTooltip from 'react-tooltip';

// Icons
import toilet from '../icons/toilet.svg';
import gendered_toilet from '../icons/gendered_toilet.svg';

export default (props) => {
  var bathroomText = {
    genderNeutral: "At least one gender neutral or single stall restroom",
    genderSegregated: "Only gender segregated restrooms"
  }
  var bathroom;
  if (props.bathroom) {
    bathroom = <div className="detail-div" id="gender-neutral" data-tip data-for="genderNeutral">

      <img src={toilet} className="detail-icon" alt="Gender Neutral Restroom" />

      <p>Gender Neutral Restroom</p>

      <ReactTooltip id="genderNeutral" place="right" type="dark" effect="solid" className="toolTipTheme">
        <span>{bathroomText.genderNeutral}</span>
      </ReactTooltip>

    </div>
  } else if (props.bathroom === false) {
    bathroom = <div className="detail-div" id="gender-neutral" data-tip datta-for="genderSegregated">

      <img src={gendered_toilet} className="detail-icon" alt="Gender Segregated Restroom" />

      <p>Gender Segregated Restrooms</p>

      <ReactTooltip id="genderSegregated" place="right" type="dark" effect="solid" className="toolTipTheme">
        <span>{bathroomText.genderSegregated}</span>
      </ReactTooltip>

    </div>
  } else if (props.editing) {
    let sendAndClearEdit = (value) => {
      props.handleBlur();
      props.handleSend.call(null, "genderNeutralRestrooms", value);
    }
    bathroom = <div className="edit-detail detail-div" id="gender-neutral">

      <p>Are there gender neutral restrooms in this cafe?</p>
      <div className="select-option" data-tip data-for="genderNeutral">
        <button onClick={sendAndClearEdit.bind(null, true)}>Yes!</button>
      </div>

      <ReactTooltip id="genderNeutral" place="bottom" type="dark" effect="solid" className="toolTipTheme">
        <span>{bathroomText.genderNeutral}</span>
      </ReactTooltip>


      <div className="select-option" data-tip data-for="genderSegregated">
        <button onClick={sendAndClearEdit.bind(null, false)}>No.</button>
      </div>

      <ReactTooltip id="genderSegregated" place="bottom" type="dark" effect="solid" className="toolTipTheme">
        <span>{bathroomText.genderSegregated}</span>
      </ReactTooltip>


      <p className="note" onClick={(e) => props.handleBlur(e)}>click to close</p>

    </div>
  } else {
    bathroom = <div className="edit-detail detail-div" id="gender-neutral" onClick={(e) => props.handleClick(e)}>

      <img src={toilet} className="detail-icon" alt="Gender Segregated Restroom" />
      <p>Restrooms unknown</p>

      <p className="note">click to edit</p>

    </div>
  }

  return (
    bathroom
  )
}
