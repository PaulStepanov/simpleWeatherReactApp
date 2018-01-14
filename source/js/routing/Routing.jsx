import React from 'react';
import {Route, Router, Switch} from 'react-router';
import {WeatherForecastSlider} from "../containers/WeatherForecastSlider";
import DetailedWeather from "../containers/DetailedWeather";
import {HashRouter} from "react-router-dom";


export default () => {
  return (
      <Switch>
        <Route exact path="/" component={WeatherForecastSlider}/>
        <Route exact path="/detailed/:day?" component={DetailedWeather}/>
      </Switch>
    )
}
