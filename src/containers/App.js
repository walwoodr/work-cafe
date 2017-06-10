//TODO: this doesn't need to be a container component

// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

// Styles
import '../styles/App.css';

// Components
import NavBar from '../components/NavBar';

// Actions
import { loadData, modifyCafe } from '../actions/cafe_actions';
import { changeZipcode, loadingApp, appLoaded, viewingComponent } from '../actions/app_state_actions';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Covfefe</h2>
          <NavBar
          viewingComponent={this.props.viewingComponent} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cafes: state.cafes, app_state: state.app_state}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadData: loadData,
    modifyCafe: modifyCafe,
    changeZipcode: changeZipcode,
    loadingApp: loadingApp,
    appLoaded: appLoaded,
    viewingComponent: viewingComponent
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
