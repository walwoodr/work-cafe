import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider, Connect } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import './styles/index.css';
import './styles/normalize.css';
import './styles/skeleton.css';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
