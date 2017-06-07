import React from 'react';
import { Link } from 'react-router-dom';

var NavBar = (props) => {
  return (
    <ul>
      <li><Link to={'/search'}>Search</Link></li>
      <li><Link to={'/cafes'}>Cafes</Link></li>
    </ul>
  )
}

export default NavBar
