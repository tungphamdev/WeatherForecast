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
  SELECT_COUNTRY,
  FORECAST_FETCH_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  countrySelected: '',
  citySelected: '',
  weatherData: {},
  forecastData: [],
});

function citySelectReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CITY:
      return state.set('citySelected', action.id);
    case SELECT_COUNTRY:
      return state.set('countrySelected', action.id);
    case WEATHER_FETCH_SUCCEEDED:
      return state.set('weatherData', action.weatherData);
    case FORECAST_FETCH_SUCCEEDED:
      return state.set('forecastData', action.forecastData);
    case WEATHER_FETCH_FAILED:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default citySelectReducer;
