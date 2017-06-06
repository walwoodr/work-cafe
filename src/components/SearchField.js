import React from 'react';
import '../styles/searchField.css';

export default class SearchField extends React.Component {
  handleChange(e){
    e.preventDefault();
    this.props.changeZipcode(e.target.value)
  };

  handleSubmit(e){
    e.preventDefault(); this.props.loadData(this.props.app_state.zipcode);
  }

  render(){
      return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input id="search_field" type="text" placeholder="zip code" value={this.props.app_state.zipcode} onChange={(e) => this.handleChange(e)} />
        <br />
        <input id="search_button" className="button-primary" type="submit" value="Search" />
      </form>
    )
  }
}
