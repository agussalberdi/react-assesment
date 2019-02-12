import { SHOW_POPULATION } from '../actions/actions';
import { FILTER_POPULATION } from '../actions/actions';

const initialState = {
  filters: {},
  list: []
}
export function showPopulation(state = initialState, action){
  switch(action.type) {
    case SHOW_POPULATION:
      return Object.assign({}, state, {list: action.payload})
    case FILTER_POPULATION:
      return Object.assign({}, state, {filters: action.payload});
    default:
      return state
  }
}