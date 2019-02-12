import { combineReducers } from 'redux';
import { showPopulation } from './population';

const rootReducer = combineReducers({
  population: showPopulation
});

export default rootReducer;
