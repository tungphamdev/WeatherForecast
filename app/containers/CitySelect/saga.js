import { put, call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { weatherFetchSucceeded, weatherFetchFailed } from './actions';

function* fetchWeatherCity(action) {
  try {
    const keyAPI = '11858b7b09ab475cc20ffea724c75cde';
    const requestURL = `http://api.openweathermap.org/data/2.5/weather?id=${action.id}&appid=${keyAPI}`;

    const weatherData = yield call(request, requestURL);
    yield put(weatherFetchSucceeded(weatherData));
  } catch (e) {
    yield put(weatherFetchFailed(e.message));
  }
}
function* citySaga() {
  yield takeLatest('SELECT_CITY', fetchWeatherCity);
}

export default citySaga;
