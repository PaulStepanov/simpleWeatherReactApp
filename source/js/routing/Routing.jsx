import React from 'react';
import {Route, Switch} from 'react-router';
import {WeatherApp} from "../containers/WeatherApp";


export default () => {
  return (
    <Switch>
      <Route exec path="/" component={WeatherApp}/>
    </Switch>)
}
