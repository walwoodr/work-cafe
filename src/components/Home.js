import React from 'react';
import SearchField from './SearchField';
import ShowCafe from './ShowCafe';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <SearchField />
        <p className="App-intro">
          Description of the app.
        </p>
        <ShowCafe />
      </div>
    )
  }
}
