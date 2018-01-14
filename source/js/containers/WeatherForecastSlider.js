import React from 'react';
import WeatherCardBar from "../components/weatherForecastSlider/WeatherCardBar";
import Temperature from "../entities/Temerature";
import WeatherCardEntity from "../entities/WeatherCardEntity";
import Weather from "../entities/Weather";
import WEATHER_STATE from "../constants/weatherState";

export class WeatherForecastSlider extends React.Component {
  mockWeatherCardEntity() {
    return [
      new WeatherCardEntity('Sat', new Weather(WEATHER_STATE.clearSky, new Temperature(12), new Temperature(14)), 1),
      new WeatherCardEntity('Sun', new Weather(WEATHER_STATE.snow, new Temperature(5), new Temperature(9)), 2),
      new WeatherCardEntity('Mon', new Weather(WEATHER_STATE.rain, new Temperature(-8), new Temperature(-5)), 3),
    ]
  }

  render() {
    return (
      <div className='WeatherApp'>
        <WeatherCardBar cardsInRow={3} weatherCardEntityArr={this.mockWeatherCardEntity()}/>
      </div>
    )
  }
}
