import React from 'react';
import SearchField from './SearchField';
import { dispatch } from 'redux';
import { bindActionCreators } from 'react-redux';

export class Home extends React.Component {
  render(){
    return (
      <div>
        <SearchField />
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

const mapStateToProps = (state) => {
  return {cafes: state.cafes}
};

export default connect(mapStateToProps)(Home)
