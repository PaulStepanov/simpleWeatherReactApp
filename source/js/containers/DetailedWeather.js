import React from 'react';
import {Grid, PageHeader} from 'react-bootstrap'
import WeatherSVGICO from "../components/WeatherSVGICO";
import DetailedWeatherTable from "../components/detailedWeather/DetailedWeatherTable";
import DateTimeElement from "../components/detailedWeather/DateTimeElement";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const weatherICOStyle = {height: '10%', width: '10%'}

@withRouter @connect(state => ({
  weatherArr: state.weatherForecast.get('weatherArr'),
  error: state.weatherForecast.get('error'),
  loading: state.weatherForecast.get('loading'),
  country: state.weatherForecast.get('country'),
  city: state.weatherForecast.get('city')
}))
class DetailedWeather extends React.Component {
  constructor(props) {
    super(props)

    this.getDayNumber = this.getDayNumber.bind(this)
  }

  render() {
    if (!this.props.weatherArr) {
      return null
    }

    let dayNumber = this.getDayNumber();

    const weather = this.props.weatherArr[dayNumber - 1]

    if (!weather) {
      return null
    }

    return (
      <div>
        <Grid>
          <PageHeader>
            Weather in {this.props.city}, {this.props.country}
          </PageHeader>
          <div style={weatherICOStyle}>
            <WeatherSVGICO weather={weather._weatherType} timeOfDay={'day'}/>
          </div>
          <p>{weather._weatherType}</p>
          <DateTimeElement day={dayNumber}/>
          <DetailedWeatherTable weather={weather}/>
        </Grid>
      </div>
    )
  }

  getDayNumber() {
    let day = this.props.match.params.day;
    if (day === undefined) {
      day = 1
    }
    if (!isNaN(parseInt(day))) {
      day = parseInt(day)
    }

    return day
  }
}

export default DetailedWeather;
