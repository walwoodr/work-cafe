import React from 'react';

import kids from '../icons/kids.svg';
import networking from '../icons/networking.svg';
import working from '../icons/working.svg';

export default (props) => {
  var vibe;
  if (props.vibe.length === 0) {
    vibe =(
      <div id="vibe" className="multi-detail">
        <div className="edit-detail detail-div">
          <img src={working} className="detail-icon" alt="unknown" />
          <p>Vibe unknown</p>
          <p className="note">click to edit</p>
        </div>
      </div>
    )
  } else {
    vibe = (
      <div id="vibe" className="multi-detail">

        {props.vibe.includes("working") ?
            <div className="detail-div">
              <img src={working} className="detail-icon" alt="working" />
              <p>Working</p>
            </div>
          : ''}

        {props.vibe.includes("networking") ?
            <div className="detail-div">
              <img src={networking} className="detail-icon" alt="networking" />
              <p>Networking</p>
            </div>
          : ''}

        {props.vibe.includes("families") ?
            <div className="detail-div">
              <img src={kids} className="detail-icon" alt="families" />
              <p>Families</p>
            </div>
          : ''}

      </div>
    )
  };

  return (
    vibe
  )
}
