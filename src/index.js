import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {Route, Router, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/normalize.css';
import './styles/skeleton.css';

ReactDOM.render(
  <App />, document.getElementById('root')
);
registerServiceWorker();
