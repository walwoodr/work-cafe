import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Covfefe</h2>
          <NavBar />
        </div>
        <Home />
      </div>
    );
  }
}

export default App;


  // <img src={logo} className="App-logo" alt="logo" />
