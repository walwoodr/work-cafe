import React from 'react';
import '../styles/showCafe.css';
import CafeDetails from './CafeDetails';

export default class ShowCafe extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="three columns" />
        <div id="show_cafe" className="six columns">
          Cafe show pane
          <CafeDetails />
        </div>
        <div className="three columns" />
      </div>
    )
  }
}
