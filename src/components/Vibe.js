import React from 'react';

import kids from '../icons/kids.svg';
import networking from '../icons/networking.svg';
import working from '../icons/working.svg';

export default (props) => {
  var vibe;
  if (props.editing) {
    let selectedVibes = props.vibe;

    var addToVibe = (name) => {
      if (!selectedVibes.includes(name)) {
        selectedVibes = selectedVibes.concat(name)
      } else {
        let idx = selectedVibes.indexOf(name);
        selectedVibes = [].concat(selectedVibes.slice(0, idx), selectedVibes.slice(idx+1, selectedVibes.length))
      }
      props.handleSend("vibe", selectedVibes);
    };
    vibe =(
      <div id="vibe" className="multi-detail">

            <div className={selectedVibes.includes("working") ? "detail-div multi-option-selected" : "detail-div multi-option" } onClick={addToVibe.bind(null, "working")}>
              <img src={working} className="detail-icon" alt="working" />
              <p>Working</p>
            </div>

            <div className={selectedVibes.includes("networking") ? "detail-div multi-option-selected" : "detail-div multi-option" } onClick={addToVibe.bind(null, "networking")}>
              <img src={networking} className="detail-icon" alt="networking" />
              <p>Networking</p>
            </div>

            <div className={selectedVibes.includes("families") ? "detail-div multi-option-selected" : "detail-div multi-option" } onClick={addToVibe.bind(null, "families")}>
              <img src={kids} className="detail-icon" alt="families" />
              <p>Families</p>
            </div>
            <br />

            <button className="select-option" onClick={(e)=>props.handleBlur(e)}>
              Done
            </button>
            
      </div>
    )
  } else if (props.vibe.length === 0) {
    vibe =(
      <div id="vibe" className="multi-detail" onClick={(e) => props.handleClick(e)}>
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
