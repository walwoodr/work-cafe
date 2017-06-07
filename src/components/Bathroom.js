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
  } else {
    bathroom = <div className="edit-detail detail-div" id="gender-neutral" onClick={(e) => console.log("clicked bathroom")}>
      <img src={gendered_toilet} className="detail-icon" alt="Gender Segregated Restroom" />
      <p>Restrooms unknown</p>
      <p className="note">click to edit</p>
    </div>
  }

  return (
    bathroom
  )
}
