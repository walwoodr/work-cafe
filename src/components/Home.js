import React from 'react';
import SearchField from './SearchField';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

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
}
