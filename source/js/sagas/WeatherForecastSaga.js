import {takeLatest, call, put} from 'redux-saga/effects';
import api from 'api'
import {
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS
} from "../actions/weatherForecast";

function* getWeatherForecast() {
  const fetchedData = yield call(() => api.getMockWeatherForecast())
  const action = {type: GET_WEATHER_SUCCESS, fetchedData}

  yield put(action)
}

export function* getWeatherForecastWatcher() {
  yield takeLatest(GET_WEATHER_START, getWeatherForecast);
}

export default [
  getWeatherForecastWatcher()
]
