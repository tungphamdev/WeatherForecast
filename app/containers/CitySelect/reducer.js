/*
 *
 * CitySelect reducer
 *
 */

import {
  fromJS,
} from 'immutable';
import {
  SELECT_CITY,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
} from './constants';

const initialState = fromJS({
  citySelected: '',
  weatherData: {},
});

function citySelectReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CITY:
      return state.set('citySelected', action.id);
    case WEATHER_FETCH_SUCCEEDED:
      return state.set('weatherData', action.weatherData);
    case WEATHER_FETCH_FAILED:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default citySelectReducer;
