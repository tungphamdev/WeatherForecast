/*
 *
 * CitySelect actions
 *
 */

import {
  SELECT_CITY,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
  SELECT_COUNTRY,
} from './constants';

export function selectCity(id) {
  return {
    type: SELECT_CITY,
    id,
  };
}

export function weatherFetchSucceeded(weatherData) {
  return {
    type: WEATHER_FETCH_SUCCEEDED,
    weatherData,
  };
}

export function weatherFetchFailed(message) {
  return {
    type: WEATHER_FETCH_FAILED,
    error: message,
  };
}


export function selectCountry(id) {
  return {
    type: SELECT_COUNTRY,
    id,
  };
}

