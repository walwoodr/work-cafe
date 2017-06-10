import React from 'react';
import '../styles/searchField.css';

const SearchField = (props) => {
  let handleChange = (e) => {
    e.preventDefault();
    props.changeZipcode(e.target.value)
  };

  let handleSubmit = (e) => {
    e.preventDefault(); props.loadData(props.app_state.zipcode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="search_field" type="text" placeholder="zip code" value={props.app_state.zipcode} onChange={handleChange} />
      <br />
      <input id="search_button" className="button-primary" type="submit" value="Search" onClick={props.viewingComponent.bind(null, "cafeIndex")} />
    </form>
  )
}

export default SearchField;
