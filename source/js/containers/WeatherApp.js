import React from 'react';
import Routing from '../routing/Routing'
import {Navbar,Grid} from 'react-bootstrap'
import {Link, NavLink, withRouter} from "react-router-dom";
import appURL from "../constants/appUrl";
import {GET_WEATHER_START} from "../actions/weatherForecast";
import {connect} from "react-redux";

@withRouter @connect(state => ({
  weatherArr: state.weatherForecast.get('weatherArr'),
}))
export class WeatherApp extends React.Component {
  componentWillMount() {
    if (!this.props.weatherArr || this.props.weatherArr.length===0) {
      this.props.dispatch({type:GET_WEATHER_START})
    }
  }

  render(){
    return (
      <div className='WeatherApp' >
        <div className={'navbar navbar-inverse bg-inverse'}>
          <Grid>
            <NavLink className = 'header-text' to={`${appURL}`}>
              Weather App
            </NavLink>
          </Grid>
        </div>
        <Routing/>
        <footer>
          <div className={'navbar navbar-inverse bg-inverse footer-nav'}>©by Zarabon, my<a href={'https://github.com/zarabon'}>Github</a></div>
        </footer>
      </div>
    )
  }
}
