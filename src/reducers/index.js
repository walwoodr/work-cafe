import cafesReducer from './cafes_reducer';
import appStateReducer from './app_state_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cafes: cafesReducer,
  app_state: appStateReducer
});

export default rootReducer;
