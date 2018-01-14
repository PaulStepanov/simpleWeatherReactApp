import React from 'react';
import WeatherCardBar from "../components/weatherForecastSlider/WeatherCardBar";
import {connect} from "react-redux";
import convertWeatherToWeatherCardArr from "../helperFunctions/convertWeatherToWeatherCardArr";
import {withRouter} from "react-router-dom";

@withRouter @connect(state => {
  return {
  weatherArr: state.weatherForecast.get('weatherArr'),
  error: state.weatherForecast.get('error'),
  loading: state.weatherForecast.get('loading'),
  county: state.weatherForecast.get('county'),
  city: state.weatherForecast.get('city')
}})
class WeatherForecastSlider extends React.Component {

  render() {

    let weatherBar = this.props.weatherArr ? <WeatherCardBar cardsInRow={5} weatherCardEntityArr={convertWeatherToWeatherCardArr(this.props.weatherArr)}/> : null
    return (
      <div className='WeatherApp'>
        {weatherBar}
      </div>
    )
  }
}

export default WeatherForecastSlider
