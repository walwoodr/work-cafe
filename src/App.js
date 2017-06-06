import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles/App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { loadData, modifyCafe } from './actions/cafe_actions';
import { changeZipcode, loadingApp, appLoaded } from './actions/app_state_actions';

export class App extends Component {
  bodyContent(){
    var content = '';

    if (this.props.app_state.loading) {
      content = <p>Page is loading</p>
    } else {
      content = <Home app_state={this.props.app_state} cafes={this.props.cafes} changeZipcode={this.props.changeZipcode} loadData={this.props.loadData} />
    }
    return content
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Covfefe</h2>
          <NavBar />
        </div>
        {this.bodyContent()}
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
    appLoaded: appLoaded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
