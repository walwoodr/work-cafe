// Libs
import React from 'react';
import { connect } from 'react-redux';

// Components
import CafeDetails from './CafeDetails';
import CafeInput from './CafeInput';

// Styles
import '../styles/showCafe.css';

export class ShowCafe extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="three columns padding-div"><p>.</p></div>
        <div id="show-cafe" className="six columns">
          <h2>{this.props.cafe.name}</h2>
          <CafeDetails cafeDetails={this.props.cafe} />
          <CafeInput />
        </div>
        <div className="three columns padding-div"><p>.</p></div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const cafe = state.cafes.find((cafe) => cafe.id == ownProps.match.params.id);
  if (cafe) {
    return {cafe: cafe}
  } else {
    return {cafe: {}}
  }
}

export default connect(mapStateToProps)(ShowCafe)
