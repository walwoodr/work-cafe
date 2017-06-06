import React from 'react';
import '../styles/searchField.css';

export default class SearchField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: ''
    }
  };

  handleChange(e){
    e.preventDefault();
    console.log(this.state.zipcode);
    this.setState({
      zipcode: e.target.value
    })
  };

  handleSubmit(e){
    e.preventDefault();
    // TODO: fetch data
    // console.log("fetching data now");
    // fetchData(this.state.zipcode);
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
