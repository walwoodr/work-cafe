// Libs
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Actions
import { loadData } from '../actions/cafe_actions';
import { changeZipcode, loadingApp, appLoaded, viewingComponent } from '../actions/app_state_actions';

// Components
import SearchField from '../components/SearchField';
import AppIntro from '../components/AppIntro';

// Images
import coffeeCupColored from '../icons/coffeecupcolored.svg'

export class Home extends React.Component {
  componentWillMount(){
    this.props.viewingComponent("search");
  }
  componentWillUpdate(){
    if (this.props.app_state.loading) {
      this.props.history.push("/cafes");
    }
  }
  render(){
    if (this.props.app_state.loading){
      return (
          <div id="loading">
            <img src={coffeeCupColored} className="loading-icon" alt="coffee" />
            <h3>Brewing up your cafes.</h3>
          </div>
        )
    } else {
      return (
        <div>
          <SearchField
            app_state={this.props.app_state}
            cafes={this.props.cafes}
            changeZipcode={this.props.changeZipcode}
            loadData={this.props.loadData}
            history={this.props.history}
            viewingComponent={this.props.viewingComponent}
          />
          <AppIntro />
        </div>
      )
    }
  }
};

const mapStateToProps = (state) => {
  return {cafes: state.cafes, app_state: state.app_state}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadData: loadData,
    changeZipcode: changeZipcode,
    loadingApp: loadingApp,
    appLoaded: appLoaded,
    viewingComponent: viewingComponent
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
