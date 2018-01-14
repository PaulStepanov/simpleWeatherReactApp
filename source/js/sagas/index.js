import {all, takeLatest} from 'redux-saga/effects';
import weatherSagas from "./WeatherForecastSaga";


export default function* rootSaga() {
  yield all([
    ...weatherSagas
  ]);
}
