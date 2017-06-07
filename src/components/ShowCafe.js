// Libs
import React from 'react';
import { connect } from 'react-redux';

// Components
import CafeDetails from './CafeDetails';

// Styles
import '../styles/showCafe.css';

export class ShowCafe extends React.Component {
  render(){
    return (
      <div className="row">
        <h2>{this.props.cafe.name}</h2>

        <div className="three columns padding-div">
          <p>.</p>
        </div>

        <div id="show-cafe" className="six columns">
          <CafeDetails cafeDetails={this.props.cafe} />
        </div>

        <div className="three columns padding-div">
          <p>.</p>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  // eslint-disable-next-line
  const cafe = state.cafes.find((cafe) => cafe.id == ownProps.match.params.id);
  if (cafe) {
    return {cafe: cafe}
  } else {
    return {cafe: {}}
  }
}

export default connect(mapStateToProps)(ShowCafe)
