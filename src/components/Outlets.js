// Libs
import React from 'react';
import ReactTooltip from 'react-tooltip';

// Icons
import many_outlets from '../icons/many_outlets.svg';
import few_outlets from '../icons/few_outlets.svg';
import some_outlets from '../icons/some_outlets.svg';

const Outlets = (props) => {
  var outletsText = {
    many: "Everyone in the cafe can plug in easily (More than one outlet per table, or close to 1 outlet per seat)",
    some: "Not all seats have outlets, but it is easy to get one with an outlet (About 1 outlet per table, or 1 outlet for every 2-3 seats)",
    few: "Tables with outlets get sniped quickly, make sure you have a full battery. (Less than 1 outlet per table, or 1 outlet per 4+ seats)"
  }

  var outlets;
  if (props.outlets === "many") {
    outlets = <div className="detail-div" data-tip data-for='manyOutlets'>

      <img src={many_outlets} className="detail-icon" alt="many outlets" />
      <p>Many outlets</p>

      <ReactTooltip id="manyOutlets" place="left" type="dark" effect="solid" className="toolTipTheme">
        <span>{outletsText.many}</span>
      </ReactTooltip>

    </div>
  } else if (props.outlets === "some") {
    outlets = <div className="detail-div" data-tip data-for='someOutlets'>

      <img src={some_outlets} className="detail-icon" alt="some outlets" />
      <p>Some outlets</p>

      <ReactTooltip id="someOutlets" place="left" type="dark" effect="solid" className="toolTipTheme">
        <span>{outletsText.some}</span>
      </ReactTooltip>

    </div>
  } else if (props.outlets === "few"){
    outlets = <div className="detail-div" data-tip data-for='fewOutlets'>

      <img src={few_outlets} className="detail-icon" alt="few outlets" />
      <p>Few outlets</p>

      <ReactTooltip id="fewOutlets" place="left" type="dark" effect="solid" className="toolTipTheme">
        <span>{outletsText.few}</span>
      </ReactTooltip>

    </div>
  } else if (props.editing){
    let sendAndClearEdit = (value) => {
      props.handleBlur();
      props.handleSend.call(null, "outlets", value);
    }
    outlets = <div className="edit-detail detail-div">

      <p>How many outlets does this cafe have in relation to seats?</p>
      <div className="select-option" data-tip data-for='manyOutlets'>
        <button onClick={sendAndClearEdit.bind(null, "many")}>Many</button>
      </div>

      <ReactTooltip id="manyOutlets" place="left" type="dark" effect="solid" className="toolTipTheme">
        <span>{outletsText.many}</span>
      </ReactTooltip>


      <div className="select-option" data-tip data-for='someOutlets'>
        <button onClick={sendAndClearEdit.bind(null, "some")}>Some</button>
      </div>

      <ReactTooltip id="someOutlets" place="left" type="dark" effect="solid" className="toolTipTheme">
        <span>{outletsText.some}</span>
      </ReactTooltip>


      <div className="select-option" data-tip data-for='fewOutlets'>
        <button onClick={sendAndClearEdit.bind(null, "few")}>Few</button>
      </div>

      <ReactTooltip id="fewOutlets" place="left" type="dark" effect="solid" className="toolTipTheme">
        <span>{outletsText.few}</span>
      </ReactTooltip>


      <p className="note" onClick={(e)=>props.handleBlur(e)}>click to close</p>

    </div>
  } else {
    outlets = <div className="edit-detail detail-div" onClick={(e) => props.handleClick(e)}>

      <img src={some_outlets} className="detail-icon" alt="unknown" />
      <p>Outlets unknown</p>
      <p className="note">click to edit</p>

    </div>
  }
  return (
    outlets
  )
}

export default Outlets;
