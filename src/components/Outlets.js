import React from 'react';
import many_outlets from '../icons/many_outlets.svg';
import few_outlets from '../icons/few_outlets.svg';
import some_outlets from '../icons/some_outlets.svg';

const Outlets = (props) => {
  var outlets;
  if (props.outlets === "many") {
    outlets = <div className="detail-div"><img src={many_outlets} className="detail-icon" alt="many outlets" /><p>Many outlets</p></div>
  } else if (props.outlets === "some") {
    outlets =
    <div className="detail-div"><img src={some_outlets} className="detail-icon" alt="some outlets" /><p>Some outlets</p></div>
  } else if (props.outlets === "few"){
    outlets = <div className="detail-div"><img src={few_outlets} className="detail-icon" alt="few outlets" /><p>Few outlets</p></div>
  } else {
    outlets = <div className="edit-detail-div" onClick={(e) => props.handleClick(e)}><img src={some_outlets} className="detail-icon" alt="unknown" /><p>Outlets unknown</p><p className="note">click to edit</p></div>
  }
  return (
    outlets
  )
}

export default Outlets;
