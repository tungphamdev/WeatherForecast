import { put, call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { weatherFetchSucceeded, weatherFetchFailed, forecastFetchSucceeded } from './actions';

function* fetchWeatherCity(action) {
  try {
    const keyAPI = '11858b7b09ab475cc20ffea724c75cde';
    const requestWeather = `http://api.openweathermap.org/data/2.5/weather?id=${action.id}&appid=${keyAPI}`;
    const requestForecast = `http://api.openweathermap.org/data/2.5/forecast?id=${action.id}&appid=${keyAPI}`;

    const weatherData = yield call(request, requestWeather);
    const forecastData = yield call(request, requestForecast);
    yield put(weatherFetchSucceeded(weatherData));
    yield put(forecastFetchSucceeded(forecastData));
  } catch (e) {
    yield put(weatherFetchFailed(e.message));
  }
}

function* citySaga() {
  yield takeLatest('SELECT_CITY', fetchWeatherCity);
}

export default citySaga;
