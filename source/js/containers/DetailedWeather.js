import React from 'react';
import {Grid, PageHeader} from 'react-bootstrap'
import WeatherSVGICO from "../components/WeatherSVGICO";
import Weather from "../entities/Weather";
import WEATHER_STATE from "../constants/weatherState";
import Temperature from "../entities/Temerature";
import Wind from "../entities/Wind";
import Rain from "../entities/Rain";
import DetailedWeatherTable from "../components/detailedWeather/DetailedWeatherTable";
import DateTimeElement from "../components/detailedWeather/DateTimeElement";

const weatherICOStyle = {height: '10%', width: '10%'}

class DetailedWeather extends React.Component {
  constructor(props) {
    super(props);

    //filling with mock data TODO replase with redux
    this.state = {}
    this.state.weather = new Weather(WEATHER_STATE.clearSky, new Temperature(12), new Temperature(14), new Temperature(10), 50, 1000, 970, 900, new Wind(3.61, 165.001), new Rain(12, 0.185), 80)
  }


  render() {
    const weather = this.state.weather

    return (
      <div>
        <Grid>
          <PageHeader>
            Weather in {'Vitsyebsk'/*TODO replace this with state*/}
          </PageHeader>
          <div style={weatherICOStyle}>
            <WeatherSVGICO weather={weather.weatherType} timeOfDay={'day'}/>
          </div>
          <p>{weather.weatherType}</p>
          <DateTimeElement day={this.props.match.params.day}/>
          <DetailedWeatherTable weather={weather}/>
        </Grid>
      </div>
    )
  }
}


export default DetailedWeather;
