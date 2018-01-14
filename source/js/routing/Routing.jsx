import React from 'react';
import {Route, Router, Switch} from 'react-router';
import WeatherForecastSlider from "../containers/WeatherForecastSlider";
import DetailedWeather from "../containers/DetailedWeather";


export default () => {
  return (
    <Switch>
      <Route exact path="/detailed/:day?" component={DetailedWeather}/>
      <Route exact path="/" component={WeatherForecastSlider}/>
    </Switch>
  )
}
