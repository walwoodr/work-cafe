// Libs
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { editingDetail } from '../actions/app_state_actions';

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
          <CafeDetails
            cafeDetails={this.props.cafe}
            editingDetail={this.props.editingDetail}
            editing={this.props.app_state.editing}
           />
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
    return {cafe: cafe, app_state: state.app_state}
  } else {
    return {cafe: {}, app_state: state.app_state}
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editingDetail: editingDetail
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCafe)
