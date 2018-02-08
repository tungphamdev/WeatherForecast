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
  FORECAST_FETCH_FAILED,
  FORECAST_FETCH_SUCCEEDED,
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

export function forecastFetchSucceeded(forecastData) {
  return {
    type: FORECAST_FETCH_SUCCEEDED,
    forecastData,
  };
}

export function forecastFetchFailed(message) {
  return {
    type: FORECAST_FETCH_FAILED,
    error: message,
  };
}


export function selectCountry(id) {
  return {
    type: SELECT_COUNTRY,
    id,
  };
}

