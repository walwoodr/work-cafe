import React from 'react';
import SearchField from './SearchField';

export default class Home extends React.Component {
  render(){
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
};
