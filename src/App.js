import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends Component {
  bodyContent(){
    var content = '';

    if (this.props.loading) {
      content = <img src={logo} className="App-logo" alt="logo" />
    } else {
      content = <Home />
    }
    return content
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Covfefe</h2>
          <NavBar />
        </div>
        {bodyContent()}
      </div>
    );
  }
}

export default App;


  //
