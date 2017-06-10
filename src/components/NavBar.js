import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

var NavBar = (props) => {
  return (
    <ul id="nav-bar">
      <Link to={'/search'}>
        <li
          className={props.nowViewing === "search" ? "nav-link current" : "nav-link"}
          id="search-link"
          onClick={props.viewingComponent.bind(null, "search")}>
            Search
        </li>
      </Link>
      <Link to={'/cafes'}>
        <li
          className={props.nowViewing === "cafeIndex" ? "nav-link current" : "nav-link"}
          id="cafe-index-link"
          onClick={props.viewingComponent.bind(null, "cafeIndex")}>
            Cafes
        </li>
      </Link>
    </ul>
  )
}

export default NavBar
