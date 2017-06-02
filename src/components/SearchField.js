import React from 'react';
import '../styles/searchField.css';

// TODO: add onclick

export default (props) => {
  return (
    <form>
      <input id="search_field" type="text" placeholder="zip code" />
      <br />
      <input id="search_button" className="button-primary" type="submit" value="Search" />
    </form>
  )
}
