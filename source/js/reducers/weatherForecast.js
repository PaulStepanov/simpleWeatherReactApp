import {
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR, SET_CITY,
  SET_COUNTRY
} from "../actions/weatherForecast";
import {Map} from 'immutable';
import WEATHER_STATE from "../constants/weatherState";
import Temperature from "../entities/Temerature";
import Wind from "../entities/Wind";
import Rain from "../entities/Rain";
import Weather from "../entities/Weather";
import convertFetchedWeatherToWeatherArr from "../helperFunctions/convertFetchedWeatherToWeatherArr";

const initialState = Map({
  loading: false,
  error: null,
  weatherArr: null,
  city: 'Minsk', //default for test purposes
  country: 'Belarus' //default for test purposes
})


const actionsMap = {
  [SET_CITY]: (state, action) => {
    return state.merge(Map({
      city: action.city
    }));
  },
  [SET_COUNTRY]: (state, action) => {
    return state.merge(Map({
      country: action.county
    }));
  },
  [GET_WEATHER_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      weatherArr: null
    }));
  },
  [GET_WEATHER_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_WEATHER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      weatherArr: convertFetchedWeatherToWeatherArr(action.fetchedData),
    }));
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
