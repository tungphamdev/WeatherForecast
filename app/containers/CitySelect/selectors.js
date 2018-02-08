import { createSelector } from 'reselect';

const selectCity = (state) => state.get('city');

const makeCitySelected = () => createSelector(
  selectCity,
  (cityState) => cityState.get('citySelected')
);

const makeCountrySelected = () => createSelector(
  selectCity,
  (cityState) => cityState.get('countrySelected')
);

const makeWeatherSelected = () => createSelector(
  selectCity,
  (cityState) => cityState.get('weatherData')
);

const makeForecastSelected = () => createSelector(
  selectCity,
  (cityState) => cityState.get('forecastData')
);

export {
  selectCity,
  makeCitySelected,
  makeWeatherSelected,
  makeCountrySelected,
  makeForecastSelected,
};
