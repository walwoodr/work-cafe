// Libs
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Actions
import { loadingApp, appLoaded } from '../actions/app_state_actions';

// Components
import IndexCafe from './IndexCafe';

export class CafeIndex extends React.Component {
  render(){
    console.log(this.props.cafes);
    var cafeHTML = this.props.cafes.map((cafe)=>{
      return (<IndexCafe cafe={cafe} />)
    });
    console.log(cafeHTML);
    return (
      <div>
        <p>Many cafes</p>
        <p>{cafeHTML}</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {cafes: state.cafes, app_state: state.app_state}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadingApp: loadingApp,
    appLoaded: appLoaded
  }, dispatch)
}

const ConnectedCafeIndex = withRouter(connect(mapStateToProps, mapDispatchToProps)(CafeIndex));

export default ConnectedCafeIndex;
