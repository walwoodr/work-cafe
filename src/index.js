// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

// Components
import App from './App';
import Home from './components/Home';
import ShowCafe from './components/ShowCafe';
import CafeIndex from './components/CafeIndex';

// Reducer
import reducer from './reducers/index';

// Styles
import './styles/index.css';
import './styles/normalize.css';
import './styles/skeleton.css';

const store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route path='/search' component={Home} />
        <Route path='/cafes' component={CafeIndex} />
        <Route path='/cafes/:id' component={ShowCafe} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
