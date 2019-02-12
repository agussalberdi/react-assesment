import axios from 'axios';
//types
export const SHOW_POPULATION = "SHOW_POPULATION";
export const FILTER_POPULATION = "FILTER_POPULATION";

export function showPopulation(){

  return (dispatch, getState) => {
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then((response) => dispatch({ type: SHOW_POPULATION, payload: response.data }))
  }

}

export function filterPopulation(filter){
  return (dispatch, getState) => dispatch({type: FILTER_POPULATION, payload: filter});
}