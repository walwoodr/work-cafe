import React from 'react';
import '../styles/searchField.css';
import fetchAPI from '../actions/fetchAPI';

export default class SearchField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: ''
    }
  };

  handleChange(e){
    e.preventDefault();
    this.setState({
      zipcode: e.target.value
    })
  };

  handleSubmit(e){
    e.preventDefault();
    let data = fetchAPI(this.state.zipcode);
  }

  render(){
      return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input id="search_field" type="text" placeholder="zip code" value={this.state.zipcode} onChange={(e) => this.handleChange(e)} />
        <br />
        <input id="search_button" className="button-primary" type="submit" value="Search" />
      </form>
    )
  }
}
