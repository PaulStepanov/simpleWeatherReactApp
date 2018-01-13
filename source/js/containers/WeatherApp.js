import React from 'react';
import WeatherCardBar from "../components/WeatherCardBar";
import Temperature from "../entities/Temerature";
import {Grid, Row, Col} from 'react-bootstrap'
import WeatherCardEntity from "../entities/WeatherCardEntity";
import Weather from "../entities/Weather";
import WEATHER_STATE from "../constants/weatherState";
import moment from "moment";

export class WeatherApp extends React.Component {
    mockWeatherCardEntity() {
      return [
        new WeatherCardEntity(moment(), new Weather(WEATHER_STATE.clearSky, new Temperature(12), new Temperature(14))),
        new WeatherCardEntity(moment().add(1, 'days'), new Weather(WEATHER_STATE.snow, new Temperature(5), new Temperature(9))),
        new WeatherCardEntity(moment().add(2, 'days'), new Weather(WEATHER_STATE.rain, new Temperature(-8), new Temperature(-5))),
      ]
    }

    render(){
      return (
        <div className='WeatherApp' >
          <WeatherCardBar cardsInRow={3} weatherCardEntityArr={this.mockWeatherCardEntity()}/>
        </div>
      )
    }

}
