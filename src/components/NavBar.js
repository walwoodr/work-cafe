import React from 'react';
import { Link } from 'react-router-dom';

var NavBar = (props) => {
  return (
    <ul>
      <li onClick={props.viewingComponent.bind(null, "search")}><Link to={'/search'}>Search</Link></li>
      <li onClick={props.viewingComponent.bind(null, "cafeIndex")}><Link to={'/cafes'}>Cafes</Link></li>
    </ul>
  )
}

export default NavBar
