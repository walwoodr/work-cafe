import cafesReducer from './cafes_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cafes: cafesReducer
});

export default rootReducer;
