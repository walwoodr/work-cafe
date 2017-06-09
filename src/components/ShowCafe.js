// Libs
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { editingDetail } from '../actions/app_state_actions';
import { modifyCafe, sendCafeUpdate } from '../actions/cafe_actions';

// Components
import CafeDetails from './CafeDetails';

// Styles
import '../styles/showCafe.css';

// Default
import peaceCoffee from '../defaultcafe.js'

export class ShowCafe extends React.Component {
  componentWillMount(){
    if (this.props.cafe === peaceCoffee ) {
      this.props.history.push("/cafes/1");
    }
  }

  componentDidUpdate(lastProps){
    if ((lastProps.app_state.editing !== this.props.app_state.editing) && (this.props.app_state.editing === '')) {
      this.props.sendCafeUpdate(this.props.cafe)
    }
  }

  render(){
    return (
      <div className="row">
        <h2>{this.props.cafe.name}</h2>

        <div className="two columns padding-div">
          <p>.</p>
        </div>

        <div id="show-cafe" className="eight columns">
          <CafeDetails
            cafeDetails={this.props.cafe}
            editingDetail={this.props.editingDetail}
            editing={this.props.app_state.editing}
            modifyCafe={this.props.modifyCafe}
            clearEdit={this.props.clearEdit}
           />
        </div>

        <div className="two columns padding-div">
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
    return {cafe: peaceCoffee, app_state: state.app_state}
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editingDetail: editingDetail,
    modifyCafe: modifyCafe,
    sendCafeUpdate: sendCafeUpdate
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCafe)
