// Libs
import React from 'react';
import { connect } from 'react-redux';

// Components
import CafeDetails from './CafeDetails';
import CafeInput from './CafeInput';

// Styles
import '../styles/showCafe.css';

export class ShowCafe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      editing: true
    })
  }

  render(){
    return (
      <div className="row">
        <h2>{this.props.cafe.name}</h2>
        <div className="three columns padding-div"><p>.</p></div>
        <div id="show-cafe" className="six columns">
          {this.state.editing ? <CafeInput /> : <CafeDetails cafeDetails={this.props.cafe} />}
          {this.state.editing ? '' : <button onClick={(e)=> this.handleClick(e)}>Share your knowledge</button>}
        </div>
        <div className="three columns padding-div"><p>.</p></div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const cafe = state.cafes.find((cafe) => cafe.id == ownProps.match.params.id);
  if (cafe) {
    return {cafe: cafe}
  } else {
    return {cafe: {}}
  }
}

export default connect(mapStateToProps)(ShowCafe)
