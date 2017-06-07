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
  componentWillMount(){
    if (this.props.cafes.length === 0 ) {
      this.props.history.push("/search");
    }
  }

  render(){
    var cafeHTML = this.props.cafes.map((cafe)=>{
      return (<IndexCafe cafe={cafe} key={cafe.id} />)
    });

    return (
      <div>
        {cafeHTML}
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
