// Libs
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { loadData } from '../actions/cafe_actions';
import { changeZipcode, loadingApp, appLoaded } from '../actions/app_state_actions';

// Components
import SearchField from './SearchField';

export class Home extends React.Component {
  render(){
    if (this.props.app_state.loading){
      return (
          <p>Brewing up your cafes.</p>
        )
    } else {
      return (
      <div>
        <SearchField app_state={this.props.app_state} cafes={this.props.cafes} changeZipcode={this.props.changeZipcode} loadData={this.props.loadData} />
        <div id="app-intro">
          <p>
            Where do you want to work today? Type in your zip code or city and explore the options without getting bogged down with unnecessary details.
          </p>
          <p>
            Then pay it forward by sharing the key information you need to work from a coffee shop.
          </p>
        </div>
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
    appLoaded: appLoaded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
