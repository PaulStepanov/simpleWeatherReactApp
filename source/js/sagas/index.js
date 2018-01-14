import {all} from 'redux-saga/effects';
import weatherSagas from "./WeatherForecastSaga";


export default function* rootSaga() {
  yield all([
    ...weatherSagas
  ]);
}
