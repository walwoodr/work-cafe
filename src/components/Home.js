import React from 'react';
import SearchField from './SearchField';

export default class Home extends React.Component {
  render(){
    return (
      <div>
        <SearchField />
        <p className="App-intro">
          Description of the app.
        </p>
      </div>
    )
  }
}
